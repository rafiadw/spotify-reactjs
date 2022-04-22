import { setupWorker } from "msw";
import { user, tracks } from "./handlers";

const workerUser = setupWorker(...user);
const workerTracks = setupWorker(...tracks);

export { workerTracks, workerUser };
