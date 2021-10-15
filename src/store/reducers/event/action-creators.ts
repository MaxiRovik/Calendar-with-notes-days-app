import {EventActionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserSwrvice";

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
    }
}