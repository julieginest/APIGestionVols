import {httpErrorFromSql} from "../types/errors"
import {errorReplaceHolder} from "../types/db"
import { response } from "express";


export const err = (err: any, res: any, errorReplaceHolder: errorReplaceHolder) =>{
    console.error("HANDLED ERROR")
    const parsedError = err as httpErrorFromSql;
    let response ={
        errorId: `M-${parsedError.HTTPcode}`,
        message: parsedError.message.replace(
            "{FK}",errorReplaceHolder.FK
        ).replace(
            "{UNIQUE}",errorReplaceHolder.UNIQUE
        ).replace(
            "{object}",errorReplaceHolder.object
        ).replace(
            "{NOT_NULL}",errorReplaceHolder.NOT_NULL
        )
        ,
    }
    

res.status(parsedError.HTTPcode).json(response);
}

