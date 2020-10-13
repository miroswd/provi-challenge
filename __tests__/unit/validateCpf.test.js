const cpfValidator = require('../../src/utils/cpfValidator');

describe('Validate CPF', () => {
  it('Should return that the cpf is valid using periods and hyphen', () => {
    const cpf = cpfValidator('529.982.247-25');
    expect(cpf).toBe(true);
  });

  it('Should return that the cpf is invalid', () => {
    const cpf = () => cpfValidator('529.972.247-25');
    expect(cpf).toThrow('Invalid CPF');
  });

  it('Should return that the cpf is valid using only number', () => {
    const cpf = cpfValidator('52998224725');
    expect(cpf).toBe(true);
  });

  it('Should return that the cpf is invalid if the number of numbers is greater than 11', () => {
    const a = () => cpfValidator('5299822247252');
    expect(a).toThrow('Invalid CPF');
  });

  it('Should return that the cpf is invalid if the number of numbers is less than 11', () => {
    const cpfFewerNumbers = () => cpfValidator('529');
    expect(cpfFewerNumbers).toThrow('Invalid CPF');
  });

  it('Should return that the cpf is invalid if it is not just numbers, periods and hyphen', () => {
    const letters = () => cpfValidator('abcdefghijk');
    const simbols = () => cpfValidator('!@#$%*()^~[');
    const numbersAndLetters = () => cpfValidator('52a98b24c25');
    const numbersAndSimbols = () => cpfValidator('52%98#24$25');

    expect(letters).toThrow('Include only numbers in CPF');
    expect(simbols).toThrow('Include only numbers in CPF');
    expect(numbersAndLetters).toThrow('Include only numbers in CPF');
    expect(numbersAndSimbols).toThrow('Include only numbers in CPF');
  });
});
