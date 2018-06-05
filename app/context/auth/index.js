import Errors from '../../library/errors'
import StudentContext from '../student'
import TeacherContext from '../teacher'

const STUDENT_TYPE = 1
const TEACHER_TYPE = 2

/**
 * Create a new user
 *
 * @param  {Object}
 * @return {User}
 */
export async function signup(email: string, type: Number, password: string) {
  const doesStudentExist = await StudentContext.exists(email)
  const doesTeacherExist = await TeacherContext.exists(email)
  const accountAlreadyExists = doesStudentExist || doesTeacherExist

  if (accountAlreadyExists) {
    throw Errors.BadRequestError(400, null, null, { msg: 'Email address already exists' })
  }

  switch (type) {
    case STUDENT_TYPE: {
      return StudentContext.create(email, password)
    }
    case TEACHER_TYPE: {
      return TeacherContext.create(email, password)
    }
    default:
      throw Errors.BadRequestError(400, null, null, { msg: 'Types need to be provided' })
  }
}

/**
 * Create a new user
 *
 * @param  {Object}
 * @return {User}
 */
export async function login(email: string, password: string) {
  console.log(email, password)
  // const validation = Validator.check(formData, {
  //   email: { required: true, email: true, type: 'string' },
  //   firstName: { required: true, type: 'string' },
  //   lastName: { required: true, type: 'string' },
  //   password: { required: true, type: 'string' },
  //   facebookToken: { type: 'string' }
  // })

  // if (validation.failed()) {
  //   throw Errors.ValidationError(validation.errors().asSentence())
  // }

  // const doesUserExist = await UserAdapter.identify(_.toLower(formData.email))

  // if (doesUserExist) {
  //   const withFb = doesUserExist.facebookProvider && doesUserExist.facebookProvider.id
  //   const msg = withFb ? 'You have already signed up with facebook' : 'Email address is already registered'

  //   throw Errors.BadRequestError(400, null, null, { email: msg })
  // }

  // const user = await UserAdapter.create(formData)

  // if (user) {
  //   UserAdapter.addPushInfo(user._id, _.get(formData, 'pushInfo', null))

  //   // if push information is available, store for the user
  //   Emitter.emit(ON.USER_SIGNED_UP, user)
  // }

  // return {
  //   user: UserAdapter.prepareForAuth(user)
  // }
}
