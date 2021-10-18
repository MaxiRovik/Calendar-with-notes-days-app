import {EventActionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuests: (payload: IUser[]):SetGuestsAction => ({type:EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]):SetEventsAction => ({type:EventActionEnum.SET_EVENTS, payload}),
    // async action
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
         /* imitation work with server -> */
            const events = localStorage.getItem("events") || "[]"
            const jsonEvents = JSON.parse(events) as IEvent[];
            jsonEvents.push(event);
            dispatch(EventActionCreators.setEvents(jsonEvents));
            /* imitation work with server -> */
            localStorage.setItem("events", JSON.stringify(jsonEvents))
        } catch(e) {
            console.log(e)
        }
    },
    fetchEvents: (currentUser: string) => async (dispatch: AppDispatch) => {
        try{ /* go to server for getting events */
            const events = localStorage.getItem("events") || "[]"
            const jsonEvents = JSON.parse(events) as IEvent[];
            const currentUserEvents = jsonEvents.filter(event => event.guest === currentUser || event.author === currentUser )
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch(e) {
            console.log(e)
        }   }

}