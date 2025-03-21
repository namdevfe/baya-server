// import Joi from 'joi'
// import { NextFunction, Request, Response } from 'express'
// import { RegisterUserBodyType, UpdateUserBodyType } from '~/types/userType'
// import ApiError from '~/utils/ApiError'
// import { StatusCodes } from 'http-status-codes'
// import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validator'

// const register = async (req: Request, res: Response, next: NextFunction) => {
//   const correctCondition = Joi.object<RegisterUserBodyType>({
//     email: Joi.string()
//       .required()
//       .email({
//         minDomainSegments: 1,
//         tlds: { allow: ['com'] }
//       }),
//     password: Joi.string().required().min(6).trim().strict(),
//     addresses: Joi.string().optional().allow(''),
//     avatar: Joi.string().optional().allow(''),
//     displayName: Joi.string().optional().allow(''),
//     firstName: Joi.string().required().trim().strict(),
//     lastName: Joi.string().required().trim().strict(),
//     role: Joi.string()
//       .optional()
//       .allow('')
//       .pattern(OBJECT_ID_RULE)
//       .message(OBJECT_ID_RULE_MESSAGE)
//   })

//   try {
//     await correctCondition.validateAsync(req.body, { abortEarly: false })
//     next()
//   } catch (error: any) {
//     next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
//   }
// }

// const updateById = async (req: Request, res: Response, next: NextFunction) => {
//   const schemaValidation = Joi.object<UpdateUserBodyType>({
//     password: Joi.string().min(6).optional(),
//     firstName: Joi.string().optional().trim().strict(),
//     lastName: Joi.string().optional().trim().strict(),
//     addresses: Joi.string().optional(),
//     avatar: Joi.string().optional().trim().strict(),
//     role: Joi.string()
//       .optional()
//       .pattern(OBJECT_ID_RULE)
//       .message(OBJECT_ID_RULE_MESSAGE)
//       .trim()
//       .strict()
//   })

//   try {
//     await schemaValidation.validateAsync(req.body, { abortEarly: false })
//     next()
//   } catch (error: any) {
//     next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
//   }
// }

// const userValidation = {
//   register,
//   updateById
// }

// export default userValidation
