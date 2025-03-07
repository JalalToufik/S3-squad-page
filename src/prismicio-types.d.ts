// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = FooterSlice | HeaderSlice | MainSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type OveronsDocumentDataSlicesSlice =
  | HeaderSlice
  | FooterSlice
  | MainOveronsSlice;

/**
 * Content for overons documents
 */
interface OveronsDocumentData {
  /**
   * Slice Zone field in *overons*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: overons.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<OveronsDocumentDataSlicesSlice>
  /**
   * Meta Description field in *overons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: overons.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *overons*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: overons.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *overons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: overons.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * overons document from Prismic
 *
 * - **API ID**: `overons`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type OveronsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<OveronsDocumentData>,
    "overons",
    Lang
  >;

/**
 * Content for studentCards documents
 */
interface SquadmembersDocumentData {
  /**
   * memberName field in *studentCards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: squadmembers.membername
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  membername: prismic.KeyTextField;

  /**
   * squadName field in *studentCards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: squadmembers.squadname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  squadname: prismic.KeyTextField;

  /**
   * memberImg field in *studentCards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: squadmembers.memberimg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  memberimg: prismic.ImageField<never>;

  /**
   * githubLink field in *studentCards*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: squadmembers.githublink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  githublink: prismic.LinkField;
}

/**
 * studentCards document from Prismic
 *
 * - **API ID**: `squadmembers`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SquadmembersDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SquadmembersDocumentData>,
    "squadmembers",
    Lang
  >;

type SquadoverviewDocumentDataSlicesSlice =
  | HeaderSlice
  | SquadMembersSlice
  | FooterSlice;

/**
 * Content for squadoverview documents
 */
interface SquadoverviewDocumentData {
  /**
   * backgroundImg field in *squadoverview*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: squadoverview.backgroundimg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundimg: prismic.ImageField<never>;

  /**
   * Slice Zone field in *squadoverview*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: squadoverview.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SquadoverviewDocumentDataSlicesSlice>
  /**
   * Meta Description field in *squadoverview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: squadoverview.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *squadoverview*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: squadoverview.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *squadoverview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: squadoverview.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * squadoverview document from Prismic
 *
 * - **API ID**: `squadoverview`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SquadoverviewDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SquadoverviewDocumentData>,
    "squadoverview",
    Lang
  >;

type SquadselectDocumentDataSlicesSlice =
  | HeaderSlice
  | FooterSlice
  | SquadSelectionSlice;

/**
 * Content for squadSelect documents
 */
interface SquadselectDocumentData {
  /**
   * Slice Zone field in *squadSelect*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: squadselect.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SquadselectDocumentDataSlicesSlice>
  /**
   * Meta Description field in *squadSelect*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: squadselect.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *squadSelect*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: squadselect.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *squadSelect*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: squadselect.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * squadSelect document from Prismic
 *
 * - **API ID**: `squadselect`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SquadselectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SquadselectDocumentData>,
    "squadselect",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | OveronsDocument
  | SquadmembersDocument
  | SquadoverviewDocument
  | SquadselectDocument;

/**
 * Primary content in *Footer → Items*
 */
export interface FooterSliceDefaultItem {
  /**
   * hvaLogo field in *Footer → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].hvalogo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hvalogo: prismic.ImageField<never>;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<FooterSliceDefaultItem>
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Header → Items*
 */
export interface HeaderSliceDefaultItem {
  /**
   * homeBtn field in *Header → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].homebtn
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  homebtn: prismic.LinkField;

  /**
   * overOns field in *Header → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].overons
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  overons: prismic.LinkField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<HeaderSliceDefaultItem>
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

/**
 * Primary content in *Main → Items*
 */
export interface MainSliceDefaultItem {
  /**
   * title field in *Main → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * contentImg field in *Main → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: main.items[].contentimg
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  contentimg: prismic.ImageField<never>;

  /**
   * linkSquads field in *Main → Items*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: main.items[].linksquads
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linksquads: prismic.LinkToMediaField;
}

/**
 * Default variation for Main Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MainSliceDefaultItem>
>;

/**
 * Slice variation for *Main*
 */
type MainSliceVariation = MainSliceDefault;

/**
 * Main Shared Slice
 *
 * - **API ID**: `main`
 * - **Description**: Main
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainSlice = prismic.SharedSlice<"main", MainSliceVariation>;

/**
 * Primary content in *MainOverons → Primary*
 */
export interface MainOveronsSliceDefaultPrimary {
  /**
   * title field in *MainOverons → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_overons.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * subtitle field in *MainOverons → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_overons.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Primary content in *MainOverons → Items*
 */
export interface MainOveronsSliceDefaultItem {
  /**
   * memberName field in *MainOverons → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_overons.items[].membername
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  membername: prismic.KeyTextField;

  /**
   * memberImg field in *MainOverons → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: main_overons.items[].memberimg
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  memberimg: prismic.ImageField<never>;

  /**
   * githubLink field in *MainOverons → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main_overons.items[].githublink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  githublink: prismic.LinkField;
}

/**
 * Default variation for MainOverons Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainOveronsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MainOveronsSliceDefaultPrimary>,
  Simplify<MainOveronsSliceDefaultItem>
>;

/**
 * Slice variation for *MainOverons*
 */
type MainOveronsSliceVariation = MainOveronsSliceDefault;

/**
 * MainOverons Shared Slice
 *
 * - **API ID**: `main_overons`
 * - **Description**: MainOverons
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainOveronsSlice = prismic.SharedSlice<
  "main_overons",
  MainOveronsSliceVariation
>;

/**
 * Primary content in *SquadMembers → Items*
 */
export interface SquadMembersSliceDefaultItem {
  /**
   * memberData field in *SquadMembers → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: squad_members.items[].memberdata
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  memberdata: prismic.ContentRelationshipField<"squadmembers">;
}

/**
 * Default variation for SquadMembers Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadMembersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SquadMembersSliceDefaultItem>
>;

/**
 * Slice variation for *SquadMembers*
 */
type SquadMembersSliceVariation = SquadMembersSliceDefault;

/**
 * SquadMembers Shared Slice
 *
 * - **API ID**: `squad_members`
 * - **Description**: SquadMembers
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadMembersSlice = prismic.SharedSlice<
  "squad_members",
  SquadMembersSliceVariation
>;

/**
 * Primary content in *SquadSelection → Primary*
 */
export interface SquadSelectionSliceDefaultPrimary {
  /**
   * title field in *SquadSelection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: squad_selection.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * subtitle field in *SquadSelection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: squad_selection.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * squadA field in *SquadSelection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: squad_selection.primary.squada
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  squada: prismic.LinkField;

  /**
   * squadB field in *SquadSelection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: squad_selection.primary.squadb
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  squadb: prismic.LinkField;

  /**
   * contentImg field in *SquadSelection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: squad_selection.primary.contentimg
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  contentimg: prismic.ImageField<never>;
}

/**
 * Default variation for SquadSelection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadSelectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SquadSelectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SquadSelection*
 */
type SquadSelectionSliceVariation = SquadSelectionSliceDefault;

/**
 * SquadSelection Shared Slice
 *
 * - **API ID**: `squad_selection`
 * - **Description**: SquadSelection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadSelectionSlice = prismic.SharedSlice<
  "squad_selection",
  SquadSelectionSliceVariation
>;

/**
 * Default variation for StudentCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StudentCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *StudentCard*
 */
type StudentCardSliceVariation = StudentCardSliceDefault;

/**
 * StudentCard Shared Slice
 *
 * - **API ID**: `student_card`
 * - **Description**: StudentCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StudentCardSlice = prismic.SharedSlice<
  "student_card",
  StudentCardSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      OveronsDocument,
      OveronsDocumentData,
      OveronsDocumentDataSlicesSlice,
      SquadmembersDocument,
      SquadmembersDocumentData,
      SquadoverviewDocument,
      SquadoverviewDocumentData,
      SquadoverviewDocumentDataSlicesSlice,
      SquadselectDocument,
      SquadselectDocumentData,
      SquadselectDocumentDataSlicesSlice,
      AllDocumentTypes,
      FooterSlice,
      FooterSliceDefaultItem,
      FooterSliceVariation,
      FooterSliceDefault,
      HeaderSlice,
      HeaderSliceDefaultItem,
      HeaderSliceVariation,
      HeaderSliceDefault,
      MainSlice,
      MainSliceDefaultItem,
      MainSliceVariation,
      MainSliceDefault,
      MainOveronsSlice,
      MainOveronsSliceDefaultPrimary,
      MainOveronsSliceDefaultItem,
      MainOveronsSliceVariation,
      MainOveronsSliceDefault,
      SquadMembersSlice,
      SquadMembersSliceDefaultItem,
      SquadMembersSliceVariation,
      SquadMembersSliceDefault,
      SquadSelectionSlice,
      SquadSelectionSliceDefaultPrimary,
      SquadSelectionSliceVariation,
      SquadSelectionSliceDefault,
      StudentCardSlice,
      StudentCardSliceVariation,
      StudentCardSliceDefault,
    };
  }
}
