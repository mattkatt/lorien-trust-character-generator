export class StringHelpers {
    static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static camelToReadable(str: string): string {
        const result = str.replace(/([A-Z0-9])/g, ' $1');
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
}
