import { CometChat } from '@cometchat-pro/chat';
import React from 'react';
import { CHAT_APP } from './Constants';

function CCManager() {

    const LISTENER_KEY_MESSAGE = 'msglistener';
    const appId = CHAT_APP.APP_ID;
    const apiKey = CHAT_APP.API_KEY;
    const LISTENER_KEY_GROUP = 'grouplistener';

    const init = () => {
        return CometChat.init(appId);
    }

    const getTextMessage = (uid, text, msgType) => {
        if (msgType === 'user') {
            return CometChat.TextMessage(
                uid,
                text,
                CometChat.MESSAGE_TYPE.TEXT,
                CometChat.RECEIVER_TYPE.USER
            );
        } else {
            return CometChat.TextMessage(
                uid,
                text,
                CometChat.MESSAGE_TYPE.TEXT,
                CometChat.RECEIVER_TYPE.GROUP
            );
        }
    }

    const getLoggedinUser = () => {
        return CometChat.getLoggedinUser();
    }

    const login = (UID) => {
        return CometChat.login(UID, apiKey);
    }

    const getGroupMessages = (GUID, callback, limit = 30) => {
        const messagesRequest = new CometChat.MessagesRequestBuilder()
            .setGUID(GUID)
            .setLimit(limit)
            .build();
        callback();
        return messagesRequest.fetchPrevious();
    }

    const sendGroupMessage = (UID, message) => {
        const textMessage = getTextMessage(UID, message, 'group');
        return CometChat.sendMessage(textMessage);
    }

    const joinGroup = (GUID) => {
        return CometChat.joinGroup(GUID, CometChat.GROUP_TYPE.PUBLIC, '');
    }

    const addMessageListener = (callback) => {
        CometChat.addMessageListener(
            LISTENER_KEY_MESSAGE,
            new CometChat.MessageListener({
                onTextMessageReceived: textMessage => {
                    callback(textMessage);
                }
            })
        )
    }
};

export default CCManager;