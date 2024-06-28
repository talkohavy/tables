import { REGEX } from './regex';

type CreateNewRuleFactoryProps = {
  checkIsValidValue?: (newValue: string) => boolean;
  transformNewValue?: (value: string) => string;
};

type ChangeValue = {
  change: boolean;
  newValue: any;
};

/**
 * @description
 * Creates a rule for when NOT to change an input's value if true.
 * @returns { (maxLength?: number) => (e: any, newValue: string) => { change: boolean, newValue: string} } Returns the rule which you can use to apply onto an input.
 */
function createNewRuleFactory(props: CreateNewRuleFactoryProps) {
  const { checkIsValidValue = () => true, transformNewValue } = props;

  return (maxLength: number) =>
    (_e: any, newValue: any): ChangeValue => {
      // conditions when value should NOT change:
      if (newValue.length > maxLength || !checkIsValidValue(newValue)) return { change: false, newValue: null };

      newValue = transformNewValue?.(newValue) ?? newValue;
      return { change: true, newValue };
    };
}

const createAlphaNumericRule = createNewRuleFactory({
  checkIsValidValue: (newValue: any): boolean => newValue === '' || REGEX.alphaNumeric.test(newValue),
});
const createIntegerNumbersOnlyRule = createNewRuleFactory({
  checkIsValidValue: (newValue: any) => newValue === '' || REGEX.integerNumbers.test(newValue),
});
const createNoSpacesAllowedRule = createNewRuleFactory({
  checkIsValidValue: (newValue: any) => !REGEX.containsWhitespace.test(newValue),
});
const createStartEndSpacesRule = createNewRuleFactory({
  checkIsValidValue: (newValue: any) => !REGEX.startsOrEndsWithWhitespace.test(newValue),
});

export { createAlphaNumericRule, createIntegerNumbersOnlyRule, createNoSpacesAllowedRule, createStartEndSpacesRule };
