declare module 'node-salesforce-connection'
declare module 'node-salesforce-connection/xml'
declare module 'sfdy/src/deploy'
declare module 'sfdy/src/retrieve'
declare module 'sfdy/src/auth'
declare module 'sfdy/src/utils/constants'

type GenericObject = { [key: string]: any };
type SfdcConnector = GenericObject

declare module 'sfdy/src/utils/sfdc-utils' {
  export function newInstance(opts: {
    username: string;
    password: string;
    serverUrl?: string;
    isSandbox?: boolean;
    apiVersion: string;
    oauth2?: {
      instanceUrl?: string;
      refreshToken?: string;
      clientId?: string;
    };
  }): SfdcConnector
}

declare module 'sfdy/src/transformer'

declare module 'sfdy/src/utils/xml-utils' {
  export function buildXml(obj: GenericObject): string
}

type PackageMapping = GenericObject
type PackageType = { members: string[]; name: string[] }
type Package = { types: PackageType[]; version: string[] };

declare module 'sfdy/src/utils/package-utils' {
  export function getPackageXml(opts?: {specificFiles: string[]; sfdcConnector: SfdcConnector}): Promise<Package>
  export function getPackageMapping(sfdcConnector: SfdcConnector): Promise<PackageMapping>
  export function getListOfSrcFiles(packageMapping: PackageMapping, pattern: string[]): Promise<string[]>
}

declare module 'sfdy/src/services/path-service' {
  export function setBasePath(basePath: string): void
}

type SfdyConfig = {
  readonly stored: boolean;
  preDeployPlugins?: string[];
  postRetrievePlugins?: string[];
  renderers?: string[];
  staticResources?: {
    useBundleRenderer?: string[];
  };
  permissionSets?: {
    stripUselessFls: boolean;
  };
  objectTranslations?: {
    stripUntranslatedFields?: boolean;
    stripNotVersionedFields?: boolean;
  };
  profiles?: {
    addAllUserPermissions?: boolean;
    addDisabledVersionedObjects?: boolean;
    addExtraObjects?: string[];
    addExtraTabVisibility?: string[];
    addExtraApplications?: string[];
    stripUserPermissionsFromStandardProfiles?: boolean;
    stripUnversionedStuff?: boolean;
  };
  roles?: {
    stripPartnerRoles?: boolean;
  };
  stripManagedPackageFields?: string[];
  excludeFiles?: string[];
}
