export interface errorReplaceHolder  {
    /** Object's name */
    object: string,
    /** All foreign keys separated by "or" */
    FK: string,

    /** All unique keys separated by "or" */
    UNIQUE: string,

    /** All non nullable keys separated by "and" */
    NOT_NULL: string,
}