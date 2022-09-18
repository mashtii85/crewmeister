/**
 * Members
 */

//Types
import { IBaseModel, IMember } from '@crewmeister-code-challenge/types'

//BaseService
import Service from './baseService'

export class MembersService {
  async get(): Promise<IBaseModel<IMember>> {
    const list = await new Service().readJsonFile<IMember>('members')
    return list
  }
}
