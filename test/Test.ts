import assert from "assert";
import { 
  TestHelpers,
  CheckIn_CheckedIn
} from "generated";
const { MockDb, CheckIn } = TestHelpers;

describe("CheckIn contract CheckedIn event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for CheckIn contract CheckedIn event
  const event = CheckIn.CheckedIn.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("CheckIn_CheckedIn is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await CheckIn.CheckedIn.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualCheckInCheckedIn = mockDbUpdated.entities.CheckIn_CheckedIn.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedCheckInCheckedIn: CheckIn_CheckedIn = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      user: event.params.user,
      timestamp: event.params.timestamp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualCheckInCheckedIn, expectedCheckInCheckedIn, "Actual CheckInCheckedIn should be the same as the expectedCheckInCheckedIn");
  });
});
