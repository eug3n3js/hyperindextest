import assert from "assert";
import { 
  TestHelpers,
  CreditSystem_CreditsDeposited
} from "generated";
const { MockDb, CreditSystem } = TestHelpers;

describe("CreditSystem contract CreditsDeposited event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for CreditSystem contract CreditsDeposited event
  const event = CreditSystem.CreditsDeposited.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("CreditSystem_CreditsDeposited is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await CreditSystem.CreditsDeposited.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualCreditSystemCreditsDeposited = mockDbUpdated.entities.CreditSystem_CreditsDeposited.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedCreditSystemCreditsDeposited: CreditSystem_CreditsDeposited = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      user: event.params.user,
      token: event.params.token,
      tokenAmount: event.params.tokenAmount,
      creditsMinted: event.params.creditsMinted,
      usdRate: event.params.usdRate,
      timestamp: event.params.timestamp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualCreditSystemCreditsDeposited, expectedCreditSystemCreditsDeposited, "Actual CreditSystemCreditsDeposited should be the same as the expectedCreditSystemCreditsDeposited");
  });
});
