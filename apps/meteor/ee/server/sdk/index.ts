import { LDAPEnterprise, proxify } from '@rocket.chat/core-services';

import type { IInstanceService } from './types/IInstanceService';

export const LDAPEE = LDAPEnterprise;
export const Instance = proxify<IInstanceService>('instance');
