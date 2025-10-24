/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  CreditSystem,
  CreditSystem_CreditsDeposited,
  CreditSystem_CreditsDepositedETH,
  CreditSystem_CreditsUsed,
} from "generated";

CreditSystem.CreditsDeposited.handler(async ({ event, context }) => {
  const entity: CreditSystem_CreditsDeposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    token: event.params.token,
    tokenAmount: event.params.tokenAmount,
    creditsMinted: event.params.creditsMinted,
    usdRate: event.params.usdRate,
    timestamp: event.params.timestamp,
  };

  context.CreditSystem_CreditsDeposited.set(entity);
});

CreditSystem.CreditsDepositedETH.handler(async ({ event, context }) => {
  const entity: CreditSystem_CreditsDepositedETH = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    ethAmount: event.params.ethAmount,
    creditsMinted: event.params.creditsMinted,
    ethUsdRate: event.params.ethUsdRate,
    timestamp: event.params.timestamp,
  };

  context.CreditSystem_CreditsDepositedETH.set(entity);
});

CreditSystem.CreditsUsed.handler(async ({ event, context }) => {
  const entity: CreditSystem_CreditsUsed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
    useType: event.params.useType,
    entityId: event.params.entityId,
    timestamp: event.params.timestamp,
  };

  context.CreditSystem_CreditsUsed.set(entity);
});
