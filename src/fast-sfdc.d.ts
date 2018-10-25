export interface Config {
  readonly stored: boolean
  apiVersion?: string
  credentials: ConfigCredential[],
  currentCredential: number
}

export interface ConfigCredential {
  username?: string
  password?: string
  url?: string
}

export interface Metadata {
  apiVersion: number  
}

export interface AuraMetadata extends Metadata {
  description: string
}

export interface ApexClassMetadata extends Metadata {
  status: 'Active'
}

export interface ApexPageMetadata extends Metadata {
  availableInTouch: boolean
  confirmationTokenRequired: boolean
  label: string
}

export interface ApexComponentMetadata extends Metadata {
  description: string,
  label: string  
}

export interface MetaObj {
  Id?: string
  FullName: string,
  Body: string,
  MetadataContainerId?: string,
  Metadata?: AnyMetadata
}

type AnyMetadata = ApexClassMetadata | ApexPageMetadata | ApexComponentMetadata | Metadata

type AuraDefType = 'APPLICATION' 
  | 'CONTROLLER' 
  | 'COMPONENT' 
  | 'EVENT' 
  | 'HELPER' 
  | 'INTERFACE' 
  | 'RENDERER' 
  | 'STYLE' 
  | 'PROVIDER' 
  | 'MODEL' 
  | 'TESTSUITE' 
  | 'DOCUMENTATION' 
  | 'TOKENS' 
  | 'DESIGN' 
  | 'SVG'

type AuraFormat = 'XML' | 'JS' | 'CSS'

export interface AuraObj {
  Id?: string,
  Source: string,
  AuraDefinitionBundleId?: string,
  DefType: AuraDefType,
  Format: AuraFormat
}

export interface AuraBundle {
  Id?: string,
  ApiVersion: number,
  Description: string,
  DeveloperName: string,
  MasterLabel: string
}

export type DoneCallback = (s: string) => void
