import { REGEX } from './regex';

/**
 * @typedef {Object} CreateNewRuleFactoryProps
 * @property {(newValue: string) => boolean} [createNewRuleFactoryProps.checkIsValidValue]
 * @property {(value: string) => string} [createNewRuleFactoryProps.transformNewValue]
 */

/**
 * @param {CreateNewRuleFactoryProps} props
 * @returns { (maxLength?: number) => (e: any, newValue: string) => { change: boolean, newValue: string} } Returns the rule which you can use to apply onto an input.
 * @description
 * Creates a rule for when NOT to change an input's value if true.
 */
function createNewRuleFactory({ checkIsValidValue = () => true, transformNewValue }) {
  return (maxLength) => (e, newValue) => {
    // conditions when value should NOT change:
    if (newValue.length > maxLength || !checkIsValidValue(newValue)) return { change: false, newValue: null };

    newValue = transformNewValue?.(newValue) ?? newValue;
    return { change: true, newValue };
  };
}

const createAlphaNumericRule = createNewRuleFactory({
  checkIsValidValue: (newValue) => newValue === '' || REGEX.alphaNumeric.test(newValue),
});
const createIntegerNumbersOnlyRule = createNewRuleFactory({
  checkIsValidValue: (newValue) => newValue === '' || REGEX.integerNumbers.test(newValue),
});
const createNoSpacesAllowedRule = createNewRuleFactory({
  checkIsValidValue: (newValue) => !REGEX.containsWhitespace.test(newValue),
});
const createStartEndSpacesRule = createNewRuleFactory({
  checkIsValidValue: (newValue) => !REGEX.startsOrEndsWithWhitespace.test(newValue),
});

export { createAlphaNumericRule, createIntegerNumbersOnlyRule, createNoSpacesAllowedRule, createStartEndSpacesRule };
