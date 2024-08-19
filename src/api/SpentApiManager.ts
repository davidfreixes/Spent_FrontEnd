import { Sport, User, Event } from "../types/types";
import SpentApi from "./SpentApi";


export const apiGetUser = async (username: string): Promise<User> => {
    const response = await SpentApi.get(`/${username}`, { headers: { 'authorization': localStorage.getItem('accessToken') } });
    const userData = response.data;
    const user: User = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        firstName: userData.firstName,
        rating: userData.rating,
        eventsCreated: userData.eventsCreated,
        joinedEvents: userData.joinedEvents
    };
    return user;
};

export const apiGetEvents = async (): Promise<Event[]> => {
    const response = await SpentApi.get(`/events`, {
        headers: { 'authorization': localStorage.getItem('accessToken') }
    });

    const apiEvents = response.data;

    const events: Event[] = apiEvents.map((event: any) => ({
        id: event.id,
        title: event.title,
        date: event.date,
        startTime: event.startTime,
        endTime: event.endTime,
        numParticipants: event.numParticipants,
        address: event.address,

        sport: {
            id: event.sport.id,
            sportName: event.sport.name,
            description: event.sport.description,
        } as Sport,

        userCreator: {
            id: event.userCreator.id,
            username: event.userCreator.username,
            email: event.userCreator.email,
            firstName: event.userCreator.firstName,
            rating: event.userCreator.rating,
            eventsCreated: [],
            joinedEvents: [],
        } as User,

        eventParticipants: event.eventParticipants.map((participant: any) => ({
            id: participant.id,
            username: participant.username,
            email: participant.email,
            firstName: participant.firstName,
            rating: participant.rating,
            eventsCreated: [],
            joinedEvents: [],
        })) as User[],
    }));

    return events;
};