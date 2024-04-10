import { createEvent, createStore } from "effector";

export const $modalState = createStore<boolean>(false);

export const modalOpener = createEvent();

export const modalCloser = createEvent();

$modalState.on(modalOpener, () => true).on(modalCloser, () => false);
