import Joi from 'joi'
import { NextFunction, Request, Response } from 'express'
import { LoginUserBodyType, RegisterUserBodyType } from '~/types/userType'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const register = async (req: Request, res: Response, next: NextFunction) => {
  const correctCondition = Joi.object<RegisterUserBodyType>({
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 1,
        tlds: { allow: ['com'] }
      }),
    password: Joi.string().required().min(6).trim().strict(),
    address: Joi.array().items(Joi.string().optional().allow('')),
    avatar: Joi.string().optional().allow(''),
    displayName: Joi.string().optional().allow(''),
    firstName: Joi.string().required().trim().strict(),
    lastName: Joi.string().required().trim().strict()
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error: any) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
  const correctCondition = Joi.object<LoginUserBodyType>({
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 1,
        tlds: { allow: ['com'] }
      }),
    password: Joi.string().required().trim().strict()
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error: any) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }
}

const authValidation = {
  register,
  login
}

export default authValidation
