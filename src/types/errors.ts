export interface httpError extends Error{
    HTTPcode: number
}

export interface httpErrorFromSql extends httpError{
    sqlErrno: number
}







/* JUST FOR DEVS */

interface mainSqlError{
    code: string,
    errno : number,
    caption: string,
}

const mainSqlErrors: mainSqlError[]  =[
    {
        code: "ER_DUP_ENTRY",
        errno : 1062,
        caption:  "Duplicate entry violation (unique constraint).",
    },
    {
        code: "ER_PARSE_ERROR",
        errno : 1064,
        caption:  "SQL syntax error.",
    },
    {
        code: "ER_BAD_FIELD_ERROR",
        errno : 1054,
        caption:  "Unknown column in the query.",
    },
    {
        code: "ER_NO_SUCH_TABLE",
        errno : 1146,
        caption:  "Table does not exist.",
    },
    {
        code: "ER_LOCK_WAIT_TIMEOUT",
        errno : 1205,
        caption:  " Lock wait timeout exceeded.",
    },
    {
        code: "ER_ACCESS_DENIED_ERROR",
        errno : 1045,
        caption:  "Access denied (incorrect credentials).",
    },
    {
        code: "ER_BAD_DB_ERROR",
        errno : 1049,
        caption:  "Unknown database.",
    },
    {
        code: "ER_ROW_IS_REFERENCED_2",
        errno : 1451,
        caption:  "Foreign key constraint violation.",
    },
]