import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsUniqueNestedConstraint implements ValidatorConstraintInterface {
  validate(items: any[], args: ValidationArguments) {
    const prop = args.constraints[0];
    const valueSet = new Set();

    for (const item of items) {
      const value = item[prop];
      if (valueSet.has(value)) {
        return false;
      }
      valueSet.add(value);
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property}.${args.constraints[0]} must be unique within the array`;
  }
}

export function IsUniqueNested(
  propName?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [propName || 'id'],
      validator: IsUniqueNestedConstraint,
    });
  };
}
