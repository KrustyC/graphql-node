// @flow

import _ from 'lodash'
import request from 'request'

import config from '../../config/config'
import * as emailTypes from './types'

export default class Mailer {
  options: Object
  sender: string

  constructor() {
    this.options = {
      method: 'POST',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      headers: {
        'api-key': config('sendInBlue.apiKey')
      },
      json: true
    }
    this.sender = config('sendInBlue.sender')
  }

  getRecipients(recipients: Array<Object>) {
    if (config('env') === 'development') {
      return [{ email: config('sendInBlue.recipientCatchAll') }]
    }
    return _.map(recipients, ({ email }) => ({ email }))
  }

  getEmailInfo(emailType: string, params: Object) {
    switch (emailType) {
      case emailTypes.CONFIRM_EMAIL:
        return {
          templateId: 1,
          params: {
            NAME: params.name,
            CONFIRM_LINK: params.confirmLink
          }
        }
      default:
        throw new Error('Email type does not exists!')
    }
  }

  sendEmail(emailType: string, recipients: Array<Object>, params: Object) {
    const emailInfo = this.getEmailInfo(emailType, params)

    const options = {
      ...this.options,
      body: {
        sender: { email: this.sender },
        to: this.getRecipients(recipients),
        ...emailInfo
      }
    }
    request(options, (error) => {
      if (error) {
        throw new Error(error)
      }
      console.log('Email sent')
    })
  }
}
