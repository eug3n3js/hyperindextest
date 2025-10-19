/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  CheckIn,
  CheckIn_CheckedIn,
} from "generated";

CheckIn.CheckedIn.handler(async ({ event, context }) => {
  const entity: CheckIn_CheckedIn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    timestamp: event.params.timestamp,
  };

  context.CheckIn_CheckedIn.set(entity);
});
