describe('User', () => {
  it('should sum value to egual 4', async () => {
    const number1 = 1;
    const number2 = 3;
    const sum = number1 + number2;

    expect(sum).toEqual(4);
  });
  it('should that the sum is different from 4', async () => {
    const sum = 4;

    expect(sum).not.toEqual(4);
  });
});
