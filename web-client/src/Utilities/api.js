import axios from 'axios';
import querystring from 'querystring';

const baseEndpoint = "https://fareshare-backend.herokuapp.com/api/";

function getRequestsForUser(){
    return axios.get(baseEndpoint + "requests");
}

function getUserMatchesForRequest(requestId){
    return axios.get(baseEndpoint + "match/" + requestId)
}

function getUserForUsername(username){
    return axios.get(baseEndpoint + "users/?username=" + username)
}

function getRequestsForUserId(userId){
    return axios.get(baseEndpoint + "requests/?userId=" + userId)
}

function createRequestForUser(destination, userId, desiredTime, timeBuffer){
    const payload = querystring.stringify({
        destination: destination,
        desiredTime: desiredTime,
        requester: userId,
        timeBuffer: timeBuffer
    })

   return axios.post(baseEndpoint + 'requests', payload)
}

export { getRequestsForUser, getUserMatchesForRequest, getUserForUsername, getRequestsForUserId, createRequestForUser };