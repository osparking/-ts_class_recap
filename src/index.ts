function numberIdentity(num: number): number {
    return num;
}

function stringIdentity(str: string): string {
    return str;
}

function booleanIdentity(bool: boolean): boolean {
    return bool;
}

function identity(arg: any): any {
    return arg;
}

function identityGeneric<Type>(argument: Type): Type {
    return argument;
}

identityGeneric<number>