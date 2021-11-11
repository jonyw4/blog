import { formatDate } from "../../../../src/components/global/formatDate";

describe('components :: global :: formatDate', () => {
  it('should format date', () => {
    const date = new Date('2019-01-01T00:00:00.000Z');
    expect(formatDate(date)).toEqual("Monday, December 31, 2018");
  })
});