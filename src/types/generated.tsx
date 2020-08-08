import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
const gql = Apollo.gql;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectorymodifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryaccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectorychangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectorybirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryatimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectorymtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryctimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectiondistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type"
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity?: Maybe<Scalars["Int"]>;
};

export type File = Node & {
  __typename?: "File";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type FilemodifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileaccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FilechangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FilebirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileatimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FilemtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FilectimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectiondistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  publicURL = "publicURL",
  childImageSharp___fixed___base64 = "childImageSharp___fixed___base64",
  childImageSharp___fixed___tracedSVG = "childImageSharp___fixed___tracedSVG",
  childImageSharp___fixed___aspectRatio = "childImageSharp___fixed___aspectRatio",
  childImageSharp___fixed___width = "childImageSharp___fixed___width",
  childImageSharp___fixed___height = "childImageSharp___fixed___height",
  childImageSharp___fixed___src = "childImageSharp___fixed___src",
  childImageSharp___fixed___srcSet = "childImageSharp___fixed___srcSet",
  childImageSharp___fixed___srcWebp = "childImageSharp___fixed___srcWebp",
  childImageSharp___fixed___srcSetWebp = "childImageSharp___fixed___srcSetWebp",
  childImageSharp___fixed___originalName = "childImageSharp___fixed___originalName",
  childImageSharp___resolutions___base64 = "childImageSharp___resolutions___base64",
  childImageSharp___resolutions___tracedSVG = "childImageSharp___resolutions___tracedSVG",
  childImageSharp___resolutions___aspectRatio = "childImageSharp___resolutions___aspectRatio",
  childImageSharp___resolutions___width = "childImageSharp___resolutions___width",
  childImageSharp___resolutions___height = "childImageSharp___resolutions___height",
  childImageSharp___resolutions___src = "childImageSharp___resolutions___src",
  childImageSharp___resolutions___srcSet = "childImageSharp___resolutions___srcSet",
  childImageSharp___resolutions___srcWebp = "childImageSharp___resolutions___srcWebp",
  childImageSharp___resolutions___srcSetWebp = "childImageSharp___resolutions___srcSetWebp",
  childImageSharp___resolutions___originalName = "childImageSharp___resolutions___originalName",
  childImageSharp___fluid___base64 = "childImageSharp___fluid___base64",
  childImageSharp___fluid___tracedSVG = "childImageSharp___fluid___tracedSVG",
  childImageSharp___fluid___aspectRatio = "childImageSharp___fluid___aspectRatio",
  childImageSharp___fluid___src = "childImageSharp___fluid___src",
  childImageSharp___fluid___srcSet = "childImageSharp___fluid___srcSet",
  childImageSharp___fluid___srcWebp = "childImageSharp___fluid___srcWebp",
  childImageSharp___fluid___srcSetWebp = "childImageSharp___fluid___srcSetWebp",
  childImageSharp___fluid___sizes = "childImageSharp___fluid___sizes",
  childImageSharp___fluid___originalImg = "childImageSharp___fluid___originalImg",
  childImageSharp___fluid___originalName = "childImageSharp___fluid___originalName",
  childImageSharp___fluid___presentationWidth = "childImageSharp___fluid___presentationWidth",
  childImageSharp___fluid___presentationHeight = "childImageSharp___fluid___presentationHeight",
  childImageSharp___sizes___base64 = "childImageSharp___sizes___base64",
  childImageSharp___sizes___tracedSVG = "childImageSharp___sizes___tracedSVG",
  childImageSharp___sizes___aspectRatio = "childImageSharp___sizes___aspectRatio",
  childImageSharp___sizes___src = "childImageSharp___sizes___src",
  childImageSharp___sizes___srcSet = "childImageSharp___sizes___srcSet",
  childImageSharp___sizes___srcWebp = "childImageSharp___sizes___srcWebp",
  childImageSharp___sizes___srcSetWebp = "childImageSharp___sizes___srcSetWebp",
  childImageSharp___sizes___sizes = "childImageSharp___sizes___sizes",
  childImageSharp___sizes___originalImg = "childImageSharp___sizes___originalImg",
  childImageSharp___sizes___originalName = "childImageSharp___sizes___originalName",
  childImageSharp___sizes___presentationWidth = "childImageSharp___sizes___presentationWidth",
  childImageSharp___sizes___presentationHeight = "childImageSharp___sizes___presentationHeight",
  childImageSharp___original___width = "childImageSharp___original___width",
  childImageSharp___original___height = "childImageSharp___original___height",
  childImageSharp___original___src = "childImageSharp___original___src",
  childImageSharp___resize___src = "childImageSharp___resize___src",
  childImageSharp___resize___tracedSVG = "childImageSharp___resize___tracedSVG",
  childImageSharp___resize___width = "childImageSharp___resize___width",
  childImageSharp___resize___height = "childImageSharp___resize___height",
  childImageSharp___resize___aspectRatio = "childImageSharp___resize___aspectRatio",
  childImageSharp___resize___originalName = "childImageSharp___resize___originalName",
  childImageSharp___id = "childImageSharp___id",
  childImageSharp___parent___id = "childImageSharp___parent___id",
  childImageSharp___parent___parent___id = "childImageSharp___parent___parent___id",
  childImageSharp___parent___parent___children = "childImageSharp___parent___parent___children",
  childImageSharp___parent___children = "childImageSharp___parent___children",
  childImageSharp___parent___children___id = "childImageSharp___parent___children___id",
  childImageSharp___parent___children___children = "childImageSharp___parent___children___children",
  childImageSharp___parent___internal___content = "childImageSharp___parent___internal___content",
  childImageSharp___parent___internal___contentDigest = "childImageSharp___parent___internal___contentDigest",
  childImageSharp___parent___internal___description = "childImageSharp___parent___internal___description",
  childImageSharp___parent___internal___fieldOwners = "childImageSharp___parent___internal___fieldOwners",
  childImageSharp___parent___internal___ignoreType = "childImageSharp___parent___internal___ignoreType",
  childImageSharp___parent___internal___mediaType = "childImageSharp___parent___internal___mediaType",
  childImageSharp___parent___internal___owner = "childImageSharp___parent___internal___owner",
  childImageSharp___parent___internal___type = "childImageSharp___parent___internal___type",
  childImageSharp___children = "childImageSharp___children",
  childImageSharp___children___id = "childImageSharp___children___id",
  childImageSharp___children___parent___id = "childImageSharp___children___parent___id",
  childImageSharp___children___parent___children = "childImageSharp___children___parent___children",
  childImageSharp___children___children = "childImageSharp___children___children",
  childImageSharp___children___children___id = "childImageSharp___children___children___id",
  childImageSharp___children___children___children = "childImageSharp___children___children___children",
  childImageSharp___children___internal___content = "childImageSharp___children___internal___content",
  childImageSharp___children___internal___contentDigest = "childImageSharp___children___internal___contentDigest",
  childImageSharp___children___internal___description = "childImageSharp___children___internal___description",
  childImageSharp___children___internal___fieldOwners = "childImageSharp___children___internal___fieldOwners",
  childImageSharp___children___internal___ignoreType = "childImageSharp___children___internal___ignoreType",
  childImageSharp___children___internal___mediaType = "childImageSharp___children___internal___mediaType",
  childImageSharp___children___internal___owner = "childImageSharp___children___internal___owner",
  childImageSharp___children___internal___type = "childImageSharp___children___internal___type",
  childImageSharp___internal___content = "childImageSharp___internal___content",
  childImageSharp___internal___contentDigest = "childImageSharp___internal___contentDigest",
  childImageSharp___internal___description = "childImageSharp___internal___description",
  childImageSharp___internal___fieldOwners = "childImageSharp___internal___fieldOwners",
  childImageSharp___internal___ignoreType = "childImageSharp___internal___ignoreType",
  childImageSharp___internal___mediaType = "childImageSharp___internal___mediaType",
  childImageSharp___internal___owner = "childImageSharp___internal___owner",
  childImageSharp___internal___type = "childImageSharp___internal___type",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  childMarkdownRemark___id = "childMarkdownRemark___id",
  childMarkdownRemark___frontmatter___title = "childMarkdownRemark___frontmatter___title",
  childMarkdownRemark___frontmatter___author = "childMarkdownRemark___frontmatter___author",
  childMarkdownRemark___frontmatter___date = "childMarkdownRemark___frontmatter___date",
  childMarkdownRemark___frontmatter___tags = "childMarkdownRemark___frontmatter___tags",
  childMarkdownRemark___frontmatter___color = "childMarkdownRemark___frontmatter___color",
  childMarkdownRemark___frontmatter___description = "childMarkdownRemark___frontmatter___description",
  childMarkdownRemark___excerpt = "childMarkdownRemark___excerpt",
  childMarkdownRemark___rawMarkdownBody = "childMarkdownRemark___rawMarkdownBody",
  childMarkdownRemark___fileAbsolutePath = "childMarkdownRemark___fileAbsolutePath",
  childMarkdownRemark___fields___tags = "childMarkdownRemark___fields___tags",
  childMarkdownRemark___fields___slug = "childMarkdownRemark___fields___slug",
  childMarkdownRemark___fields___year = "childMarkdownRemark___fields___year",
  childMarkdownRemark___html = "childMarkdownRemark___html",
  childMarkdownRemark___htmlAst = "childMarkdownRemark___htmlAst",
  childMarkdownRemark___excerptAst = "childMarkdownRemark___excerptAst",
  childMarkdownRemark___headings = "childMarkdownRemark___headings",
  childMarkdownRemark___headings___id = "childMarkdownRemark___headings___id",
  childMarkdownRemark___headings___value = "childMarkdownRemark___headings___value",
  childMarkdownRemark___headings___depth = "childMarkdownRemark___headings___depth",
  childMarkdownRemark___timeToRead = "childMarkdownRemark___timeToRead",
  childMarkdownRemark___tableOfContents = "childMarkdownRemark___tableOfContents",
  childMarkdownRemark___wordCount___paragraphs = "childMarkdownRemark___wordCount___paragraphs",
  childMarkdownRemark___wordCount___sentences = "childMarkdownRemark___wordCount___sentences",
  childMarkdownRemark___wordCount___words = "childMarkdownRemark___wordCount___words",
  childMarkdownRemark___parent___id = "childMarkdownRemark___parent___id",
  childMarkdownRemark___parent___parent___id = "childMarkdownRemark___parent___parent___id",
  childMarkdownRemark___parent___parent___children = "childMarkdownRemark___parent___parent___children",
  childMarkdownRemark___parent___children = "childMarkdownRemark___parent___children",
  childMarkdownRemark___parent___children___id = "childMarkdownRemark___parent___children___id",
  childMarkdownRemark___parent___children___children = "childMarkdownRemark___parent___children___children",
  childMarkdownRemark___parent___internal___content = "childMarkdownRemark___parent___internal___content",
  childMarkdownRemark___parent___internal___contentDigest = "childMarkdownRemark___parent___internal___contentDigest",
  childMarkdownRemark___parent___internal___description = "childMarkdownRemark___parent___internal___description",
  childMarkdownRemark___parent___internal___fieldOwners = "childMarkdownRemark___parent___internal___fieldOwners",
  childMarkdownRemark___parent___internal___ignoreType = "childMarkdownRemark___parent___internal___ignoreType",
  childMarkdownRemark___parent___internal___mediaType = "childMarkdownRemark___parent___internal___mediaType",
  childMarkdownRemark___parent___internal___owner = "childMarkdownRemark___parent___internal___owner",
  childMarkdownRemark___parent___internal___type = "childMarkdownRemark___parent___internal___type",
  childMarkdownRemark___children = "childMarkdownRemark___children",
  childMarkdownRemark___children___id = "childMarkdownRemark___children___id",
  childMarkdownRemark___children___parent___id = "childMarkdownRemark___children___parent___id",
  childMarkdownRemark___children___parent___children = "childMarkdownRemark___children___parent___children",
  childMarkdownRemark___children___children = "childMarkdownRemark___children___children",
  childMarkdownRemark___children___children___id = "childMarkdownRemark___children___children___id",
  childMarkdownRemark___children___children___children = "childMarkdownRemark___children___children___children",
  childMarkdownRemark___children___internal___content = "childMarkdownRemark___children___internal___content",
  childMarkdownRemark___children___internal___contentDigest = "childMarkdownRemark___children___internal___contentDigest",
  childMarkdownRemark___children___internal___description = "childMarkdownRemark___children___internal___description",
  childMarkdownRemark___children___internal___fieldOwners = "childMarkdownRemark___children___internal___fieldOwners",
  childMarkdownRemark___children___internal___ignoreType = "childMarkdownRemark___children___internal___ignoreType",
  childMarkdownRemark___children___internal___mediaType = "childMarkdownRemark___children___internal___mediaType",
  childMarkdownRemark___children___internal___owner = "childMarkdownRemark___children___internal___owner",
  childMarkdownRemark___children___internal___type = "childMarkdownRemark___children___internal___type",
  childMarkdownRemark___internal___content = "childMarkdownRemark___internal___content",
  childMarkdownRemark___internal___contentDigest = "childMarkdownRemark___internal___contentDigest",
  childMarkdownRemark___internal___description = "childMarkdownRemark___internal___description",
  childMarkdownRemark___internal___fieldOwners = "childMarkdownRemark___internal___fieldOwners",
  childMarkdownRemark___internal___ignoreType = "childMarkdownRemark___internal___ignoreType",
  childMarkdownRemark___internal___mediaType = "childMarkdownRemark___internal___mediaType",
  childMarkdownRemark___internal___owner = "childMarkdownRemark___internal___owner",
  childMarkdownRemark___internal___type = "childMarkdownRemark___internal___type"
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export enum ImageCropFocus {
  CENTER = "CENTER",
  NORTH = "NORTH",
  NORTHEAST = "NORTHEAST",
  EAST = "EAST",
  SOUTHEAST = "SOUTHEAST",
  SOUTH = "SOUTH",
  SOUTHWEST = "SOUTHWEST",
  WEST = "WEST",
  NORTHWEST = "NORTHWEST",
  ENTROPY = "ENTROPY",
  ATTENTION = "ATTENTION"
}

export enum ImageFit {
  COVER = "COVER",
  CONTAIN = "CONTAIN",
  FILL = "FILL",
  INSIDE = "INSIDE",
  OUTSIDE = "OUTSIDE"
}

export enum ImageFormat {
  NO_CHANGE = "NO_CHANGE",
  JPG = "JPG",
  PNG = "PNG",
  WEBP = "WEBP"
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpfixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpresolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpfluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpsizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpresizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars["Boolean"]>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectiondistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = "fixed___base64",
  fixed___tracedSVG = "fixed___tracedSVG",
  fixed___aspectRatio = "fixed___aspectRatio",
  fixed___width = "fixed___width",
  fixed___height = "fixed___height",
  fixed___src = "fixed___src",
  fixed___srcSet = "fixed___srcSet",
  fixed___srcWebp = "fixed___srcWebp",
  fixed___srcSetWebp = "fixed___srcSetWebp",
  fixed___originalName = "fixed___originalName",
  resolutions___base64 = "resolutions___base64",
  resolutions___tracedSVG = "resolutions___tracedSVG",
  resolutions___aspectRatio = "resolutions___aspectRatio",
  resolutions___width = "resolutions___width",
  resolutions___height = "resolutions___height",
  resolutions___src = "resolutions___src",
  resolutions___srcSet = "resolutions___srcSet",
  resolutions___srcWebp = "resolutions___srcWebp",
  resolutions___srcSetWebp = "resolutions___srcSetWebp",
  resolutions___originalName = "resolutions___originalName",
  fluid___base64 = "fluid___base64",
  fluid___tracedSVG = "fluid___tracedSVG",
  fluid___aspectRatio = "fluid___aspectRatio",
  fluid___src = "fluid___src",
  fluid___srcSet = "fluid___srcSet",
  fluid___srcWebp = "fluid___srcWebp",
  fluid___srcSetWebp = "fluid___srcSetWebp",
  fluid___sizes = "fluid___sizes",
  fluid___originalImg = "fluid___originalImg",
  fluid___originalName = "fluid___originalName",
  fluid___presentationWidth = "fluid___presentationWidth",
  fluid___presentationHeight = "fluid___presentationHeight",
  sizes___base64 = "sizes___base64",
  sizes___tracedSVG = "sizes___tracedSVG",
  sizes___aspectRatio = "sizes___aspectRatio",
  sizes___src = "sizes___src",
  sizes___srcSet = "sizes___srcSet",
  sizes___srcWebp = "sizes___srcWebp",
  sizes___srcSetWebp = "sizes___srcSetWebp",
  sizes___sizes = "sizes___sizes",
  sizes___originalImg = "sizes___originalImg",
  sizes___originalName = "sizes___originalName",
  sizes___presentationWidth = "sizes___presentationWidth",
  sizes___presentationHeight = "sizes___presentationHeight",
  original___width = "original___width",
  original___height = "original___height",
  original___src = "original___src",
  resize___src = "resize___src",
  resize___tracedSVG = "resize___tracedSVG",
  resize___width = "resize___width",
  resize___height = "resize___height",
  resize___aspectRatio = "resize___aspectRatio",
  resize___originalName = "resize___originalName",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type"
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: "ImageSharpResolutions";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: "ImageSharpSizes";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type JSONQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex?: Maybe<Scalars["JSON"]>;
  glob?: Maybe<Scalars["JSON"]>;
};

export enum MarkdownExcerptFormats {
  PLAIN = "PLAIN",
  HTML = "HTML",
  MARKDOWN = "MARKDOWN"
}

export type MarkdownHeading = {
  __typename?: "MarkdownHeading";
  id?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  depth?: Maybe<Scalars["Int"]>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6"
}

export type MarkdownRemark = Node & {
  __typename?: "MarkdownRemark";
  id: Scalars["ID"];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars["String"]>;
  rawMarkdownBody?: Maybe<Scalars["String"]>;
  fileAbsolutePath?: Maybe<Scalars["String"]>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars["String"]>;
  htmlAst?: Maybe<Scalars["JSON"]>;
  excerptAst?: Maybe<Scalars["JSON"]>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars["Int"]>;
  tableOfContents?: Maybe<Scalars["String"]>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkexcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkexcerptAstArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
};

export type MarkdownRemarkheadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarktableOfContentsArgs = {
  absolute?: Maybe<Scalars["Boolean"]>;
  pathToSlugField?: Maybe<Scalars["String"]>;
  maxDepth?: Maybe<Scalars["Int"]>;
  heading?: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkConnection = {
  __typename?: "MarkdownRemarkConnection";
  totalCount: Scalars["Int"];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectiondistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: "MarkdownRemarkEdge";
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: "MarkdownRemarkFields";
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug?: Maybe<Scalars["String"]>;
  year?: Maybe<Scalars["Int"]>;
};

export enum MarkdownRemarkFieldsEnum {
  id = "id",
  frontmatter___title = "frontmatter___title",
  frontmatter___author = "frontmatter___author",
  frontmatter___date = "frontmatter___date",
  frontmatter___tags = "frontmatter___tags",
  frontmatter___color = "frontmatter___color",
  frontmatter___description = "frontmatter___description",
  excerpt = "excerpt",
  rawMarkdownBody = "rawMarkdownBody",
  fileAbsolutePath = "fileAbsolutePath",
  fields___tags = "fields___tags",
  fields___slug = "fields___slug",
  fields___year = "fields___year",
  html = "html",
  htmlAst = "htmlAst",
  excerptAst = "excerptAst",
  headings = "headings",
  headings___id = "headings___id",
  headings___value = "headings___value",
  headings___depth = "headings___depth",
  timeToRead = "timeToRead",
  tableOfContents = "tableOfContents",
  wordCount___paragraphs = "wordCount___paragraphs",
  wordCount___sentences = "wordCount___sentences",
  wordCount___words = "wordCount___words",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type"
}

export type MarkdownRemarkFieldsFilterInput = {
  tags?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JSONQueryOperatorInput>;
  excerptAst?: Maybe<JSONQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: "MarkdownRemarkFrontmatter";
  title?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  color?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkFrontmatterdateArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: "MarkdownRemarkGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: "MarkdownWordCount";
  paragraphs?: Maybe<Scalars["Int"]>;
  sentences?: Maybe<Scalars["Int"]>;
  words?: Maybe<Scalars["Int"]>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars["Float"]>;
  alphaMax?: Maybe<Scalars["Float"]>;
  optCurve?: Maybe<Scalars["Boolean"]>;
  optTolerance?: Maybe<Scalars["Float"]>;
  threshold?: Maybe<Scalars["Int"]>;
  blackOnWhite?: Maybe<Scalars["Boolean"]>;
  color?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = "TURNPOLICY_BLACK",
  TURNPOLICY_WHITE = "TURNPOLICY_WHITE",
  TURNPOLICY_LEFT = "TURNPOLICY_LEFT",
  TURNPOLICY_RIGHT = "TURNPOLICY_RIGHT",
  TURNPOLICY_MINORITY = "TURNPOLICY_MINORITY",
  TURNPOLICY_MAJORITY = "TURNPOLICY_MAJORITY"
}

export type Query = {
  __typename?: "Query";
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryfileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type QueryallFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerydirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryallDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerysitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryallSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerysiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryallSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerymarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JSONQueryOperatorInput>;
  excerptAst?: Maybe<JSONQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryallMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryimageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryallImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerysiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryallSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerysitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryallSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitebuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadatabuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectiondistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  buildTime = "buildTime"
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectiondistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = "buildTime",
  siteMetadata___title = "siteMetadata___title",
  siteMetadata___author = "siteMetadata___author",
  siteMetadata___description = "siteMetadata___description",
  siteMetadata___siteUrl = "siteMetadata___siteUrl",
  siteMetadata___social___github = "siteMetadata___social___github",
  siteMetadata___social___twitter = "siteMetadata___social___twitter",
  port = "port",
  host = "host",
  polyfill = "polyfill",
  pathPrefix = "pathPrefix",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type"
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectiondistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  tag?: Maybe<Scalars["String"]>;
  year?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["String"]>;
  previous?: Maybe<SitePageContextPrevious>;
  next?: Maybe<SitePageContextNext>;
};

export type SitePageContextFilterInput = {
  tag?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<IntQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  previous?: Maybe<SitePageContextPreviousFilterInput>;
  next?: Maybe<SitePageContextNextFilterInput>;
};

export type SitePageContextNext = {
  __typename?: "SitePageContextNext";
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SitePageContextNextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevious = {
  __typename?: "SitePageContextPrevious";
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SitePageContextPreviousFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = "path",
  component = "component",
  internalComponentName = "internalComponentName",
  componentChunkName = "componentChunkName",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  context___tag = "context___tag",
  context___year = "context___year",
  context___slug = "context___slug",
  context___previous___slug = "context___previous___slug",
  context___previous___title = "context___previous___title",
  context___next___slug = "context___next___slug",
  context___next___title = "context___next___title",
  pluginCreator___id = "pluginCreator___id",
  pluginCreator___parent___id = "pluginCreator___parent___id",
  pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
  pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
  pluginCreator___parent___children = "pluginCreator___parent___children",
  pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
  pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
  pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
  pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
  pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
  pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
  pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
  pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
  pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
  pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
  pluginCreator___children = "pluginCreator___children",
  pluginCreator___children___id = "pluginCreator___children___id",
  pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
  pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
  pluginCreator___children___children = "pluginCreator___children___children",
  pluginCreator___children___children___id = "pluginCreator___children___children___id",
  pluginCreator___children___children___children = "pluginCreator___children___children___children",
  pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
  pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
  pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
  pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
  pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
  pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
  pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
  pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
  pluginCreator___internal___content = "pluginCreator___internal___content",
  pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
  pluginCreator___internal___description = "pluginCreator___internal___description",
  pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
  pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
  pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
  pluginCreator___internal___owner = "pluginCreator___internal___owner",
  pluginCreator___internal___type = "pluginCreator___internal___type",
  pluginCreator___resolve = "pluginCreator___resolve",
  pluginCreator___name = "pluginCreator___name",
  pluginCreator___version = "pluginCreator___version",
  pluginCreator___pluginOptions___plugins = "pluginCreator___pluginOptions___plugins",
  pluginCreator___pluginOptions___plugins___resolve = "pluginCreator___pluginOptions___plugins___resolve",
  pluginCreator___pluginOptions___plugins___id = "pluginCreator___pluginOptions___plugins___id",
  pluginCreator___pluginOptions___plugins___name = "pluginCreator___pluginOptions___plugins___name",
  pluginCreator___pluginOptions___plugins___version = "pluginCreator___pluginOptions___plugins___version",
  pluginCreator___pluginOptions___plugins___browserAPIs = "pluginCreator___pluginOptions___plugins___browserAPIs",
  pluginCreator___pluginOptions___plugins___pluginFilepath = "pluginCreator___pluginOptions___plugins___pluginFilepath",
  pluginCreator___pluginOptions___bucketName = "pluginCreator___pluginOptions___bucketName",
  pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
  pluginCreator___pluginOptions___name = "pluginCreator___pluginOptions___name",
  pluginCreator___pluginOptions___maxWidth = "pluginCreator___pluginOptions___maxWidth",
  pluginCreator___pluginOptions___withWebp = "pluginCreator___pluginOptions___withWebp",
  pluginCreator___pluginOptions___tracedSVG = "pluginCreator___pluginOptions___tracedSVG",
  pluginCreator___pluginOptions___wrapperStyle = "pluginCreator___pluginOptions___wrapperStyle",
  pluginCreator___pluginOptions___showLineNumbers = "pluginCreator___pluginOptions___showLineNumbers",
  pluginCreator___pluginOptions___target = "pluginCreator___pluginOptions___target",
  pluginCreator___pluginOptions___rel = "pluginCreator___pluginOptions___rel",
  pluginCreator___pluginOptions___templatePath = "pluginCreator___pluginOptions___templatePath",
  pluginCreator___pluginOptions___short_name = "pluginCreator___pluginOptions___short_name",
  pluginCreator___pluginOptions___start_url = "pluginCreator___pluginOptions___start_url",
  pluginCreator___pluginOptions___background_color = "pluginCreator___pluginOptions___background_color",
  pluginCreator___pluginOptions___theme_color = "pluginCreator___pluginOptions___theme_color",
  pluginCreator___pluginOptions___display = "pluginCreator___pluginOptions___display",
  pluginCreator___pluginOptions___icon = "pluginCreator___pluginOptions___icon",
  pluginCreator___pluginOptions___cache_busting_mode = "pluginCreator___pluginOptions___cache_busting_mode",
  pluginCreator___pluginOptions___include_favicon = "pluginCreator___pluginOptions___include_favicon",
  pluginCreator___pluginOptions___legacy = "pluginCreator___pluginOptions___legacy",
  pluginCreator___pluginOptions___theme_color_in_head = "pluginCreator___pluginOptions___theme_color_in_head",
  pluginCreator___pluginOptions___cacheDigest = "pluginCreator___pluginOptions___cacheDigest",
  pluginCreator___pluginOptions___pathToConfigModule = "pluginCreator___pluginOptions___pathToConfigModule",
  pluginCreator___pluginOptions___configDir = "pluginCreator___pluginOptions___configDir",
  pluginCreator___pluginOptions___projectRoot = "pluginCreator___pluginOptions___projectRoot",
  pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
  pluginCreator___pluginOptions___query = "pluginCreator___pluginOptions___query",
  pluginCreator___pluginOptions___feeds = "pluginCreator___pluginOptions___feeds",
  pluginCreator___pluginOptions___feeds___output = "pluginCreator___pluginOptions___feeds___output",
  pluginCreator___pluginOptions___feeds___title = "pluginCreator___pluginOptions___feeds___title",
  pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
  pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
  pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
  pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
  pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
  pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
  pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
  pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
  pluginCreator___packageJson___author = "pluginCreator___packageJson___author",
  pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
  pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
  pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
  pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
  pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
  pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
  pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
  pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
  pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
  pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
  pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath"
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectiondistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectiongroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  resolve = "resolve",
  name = "name",
  version = "version",
  pluginOptions___plugins = "pluginOptions___plugins",
  pluginOptions___plugins___resolve = "pluginOptions___plugins___resolve",
  pluginOptions___plugins___id = "pluginOptions___plugins___id",
  pluginOptions___plugins___name = "pluginOptions___plugins___name",
  pluginOptions___plugins___version = "pluginOptions___plugins___version",
  pluginOptions___plugins___pluginOptions___maxWidth = "pluginOptions___plugins___pluginOptions___maxWidth",
  pluginOptions___plugins___pluginOptions___withWebp = "pluginOptions___plugins___pluginOptions___withWebp",
  pluginOptions___plugins___pluginOptions___tracedSVG = "pluginOptions___plugins___pluginOptions___tracedSVG",
  pluginOptions___plugins___pluginOptions___wrapperStyle = "pluginOptions___plugins___pluginOptions___wrapperStyle",
  pluginOptions___plugins___pluginOptions___showLineNumbers = "pluginOptions___plugins___pluginOptions___showLineNumbers",
  pluginOptions___plugins___pluginOptions___target = "pluginOptions___plugins___pluginOptions___target",
  pluginOptions___plugins___pluginOptions___rel = "pluginOptions___plugins___pluginOptions___rel",
  pluginOptions___plugins___browserAPIs = "pluginOptions___plugins___browserAPIs",
  pluginOptions___plugins___pluginFilepath = "pluginOptions___plugins___pluginFilepath",
  pluginOptions___bucketName = "pluginOptions___bucketName",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___maxWidth = "pluginOptions___maxWidth",
  pluginOptions___withWebp = "pluginOptions___withWebp",
  pluginOptions___tracedSVG = "pluginOptions___tracedSVG",
  pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
  pluginOptions___showLineNumbers = "pluginOptions___showLineNumbers",
  pluginOptions___target = "pluginOptions___target",
  pluginOptions___rel = "pluginOptions___rel",
  pluginOptions___templatePath = "pluginOptions___templatePath",
  pluginOptions___short_name = "pluginOptions___short_name",
  pluginOptions___start_url = "pluginOptions___start_url",
  pluginOptions___background_color = "pluginOptions___background_color",
  pluginOptions___theme_color = "pluginOptions___theme_color",
  pluginOptions___display = "pluginOptions___display",
  pluginOptions___icon = "pluginOptions___icon",
  pluginOptions___cache_busting_mode = "pluginOptions___cache_busting_mode",
  pluginOptions___include_favicon = "pluginOptions___include_favicon",
  pluginOptions___legacy = "pluginOptions___legacy",
  pluginOptions___theme_color_in_head = "pluginOptions___theme_color_in_head",
  pluginOptions___cacheDigest = "pluginOptions___cacheDigest",
  pluginOptions___pathToConfigModule = "pluginOptions___pathToConfigModule",
  pluginOptions___configDir = "pluginOptions___configDir",
  pluginOptions___projectRoot = "pluginOptions___projectRoot",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  pluginOptions___query = "pluginOptions___query",
  pluginOptions___feeds = "pluginOptions___feeds",
  pluginOptions___feeds___query___kind = "pluginOptions___feeds___query___kind",
  pluginOptions___feeds___query___definitions = "pluginOptions___feeds___query___definitions",
  pluginOptions___feeds___output = "pluginOptions___feeds___output",
  pluginOptions___feeds___title = "pluginOptions___feeds___title",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___dependencies___name = "packageJson___dependencies___name",
  packageJson___dependencies___version = "packageJson___dependencies___version",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___devDependencies___name = "packageJson___devDependencies___name",
  packageJson___devDependencies___version = "packageJson___devDependencies___version",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
  packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
  packageJson___keywords = "packageJson___keywords"
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  bucketName?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  maxWidth?: Maybe<Scalars["Int"]>;
  withWebp?: Maybe<Scalars["Boolean"]>;
  tracedSVG?: Maybe<Scalars["Boolean"]>;
  wrapperStyle?: Maybe<Scalars["String"]>;
  showLineNumbers?: Maybe<Scalars["Boolean"]>;
  target?: Maybe<Scalars["String"]>;
  rel?: Maybe<Scalars["String"]>;
  templatePath?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  start_url?: Maybe<Scalars["String"]>;
  background_color?: Maybe<Scalars["String"]>;
  theme_color?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  cache_busting_mode?: Maybe<Scalars["String"]>;
  include_favicon?: Maybe<Scalars["Boolean"]>;
  legacy?: Maybe<Scalars["Boolean"]>;
  theme_color_in_head?: Maybe<Scalars["Boolean"]>;
  cacheDigest?: Maybe<Scalars["String"]>;
  pathToConfigModule?: Maybe<Scalars["String"]>;
  configDir?: Maybe<Scalars["String"]>;
  projectRoot?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
  query?: Maybe<Scalars["String"]>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
};

export type SitePluginPluginOptionsFeeds = {
  __typename?: "SitePluginPluginOptionsFeeds";
  query?: Maybe<SitePluginPluginOptionsFeedsQuery>;
  output?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<SitePluginPluginOptionsFeedsQueryFilterInput>;
  output?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFeedsQuery = {
  __typename?: "SitePluginPluginOptionsFeedsQuery";
  kind?: Maybe<Scalars["String"]>;
  definitions?: Maybe<
    Array<Maybe<SitePluginPluginOptionsFeedsQueryDefinitions>>
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitions = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitions";
  kind?: Maybe<Scalars["String"]>;
  operation?: Maybe<Scalars["String"]>;
  name?: Maybe<SitePluginPluginOptionsFeedsQueryDefinitionsName>;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSet
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  operation?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<SitePluginPluginOptionsFeedsQueryDefinitionsNameFilterInput>;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsQueryDefinitionsFilterInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSet = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSet";
  kind?: Maybe<Scalars["String"]>;
  selections?: Maybe<
    Array<
      Maybe<SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelections>
    >
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  selections?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsFilterListInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelections = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelections";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsName
  >;
  arguments?: Maybe<
    Array<
      Maybe<
        SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArguments
      >
    >
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSet
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArguments = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArguments";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsName
  >;
  value?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValue
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsNameFilterInput
  >;
  value?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValue = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValue";
  kind?: Maybe<Scalars["String"]>;
  fields?: Maybe<
    Array<
      Maybe<
        SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFields
      >
    >
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFields = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFields";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsName
  >;
  value?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValue
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsNameFilterInput
  >;
  value?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValue = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValue";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  values?: Maybe<
    Array<
      Maybe<
        SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueValues
      >
    >
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  values?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueValuesFilterListInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueValues = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueValues";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueValuesFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueValuesFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsValueValuesFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsValueFieldsFilterListInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsNameFilterInput
  >;
  arguments?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsArgumentsFilterListInput
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSet = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSet";
  kind?: Maybe<Scalars["String"]>;
  selections?: Maybe<
    Array<
      Maybe<
        SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelections
      >
    >
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  selections?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelections = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelections";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsName
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet";
  kind?: Maybe<Scalars["String"]>;
  selections?: Maybe<
    Array<
      Maybe<
        SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections
      >
    >
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  selections?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet";
  kind?: Maybe<Scalars["String"]>;
  selections?: Maybe<
    Array<
      Maybe<
        SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections
      >
    >
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  selections?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput
  >;
  selectionSet?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSet";
  kind?: Maybe<Scalars["String"]>;
  selections?: Maybe<
    Array<
      Maybe<
        SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections
      >
    >
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  selections?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelections";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterListInput = {
  elemMatch?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsFilterInput
  >;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName = {
  __typename?: "SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsName";
  kind?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsQueryDefinitionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsSelectionSetSelectionsNameFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsQueryFilterInput = {
  kind?: Maybe<StringQueryOperatorInput>;
  definitions?: Maybe<
    SitePluginPluginOptionsFeedsQueryDefinitionsFilterListInput
  >;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  bucketName?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  templatePath?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  configDir?: Maybe<StringQueryOperatorInput>;
  projectRoot?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: "SitePluginPluginOptionsPlugins";
  resolve?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: "SitePluginPluginOptionsPluginsPluginOptions";
  maxWidth?: Maybe<Scalars["Int"]>;
  withWebp?: Maybe<Scalars["Boolean"]>;
  tracedSVG?: Maybe<Scalars["Boolean"]>;
  wrapperStyle?: Maybe<Scalars["String"]>;
  showLineNumbers?: Maybe<Scalars["Boolean"]>;
  target?: Maybe<Scalars["String"]>;
  rel?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  title?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  siteUrl?: Maybe<Scalars["String"]>;
  social?: Maybe<SiteSiteMetadataSocial>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
};

export type SiteSiteMetadataSocial = {
  __typename?: "SiteSiteMetadataSocial";
  github?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataSocialFilterInput = {
  github?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC"
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type FeedQueryVariables = Exact<{ [key: string]: never }>;

export type FeedQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "siteUrl">
      >;
    }
  >;
  allMarkdownRemark: { __typename?: "MarkdownRemarkConnection" } & {
    edges: Array<
      { __typename?: "MarkdownRemarkEdge" } & {
        node: { __typename?: "MarkdownRemark" } & Pick<
          MarkdownRemark,
          "excerpt" | "html"
        > & {
            fields?: Maybe<
              { __typename?: "MarkdownRemarkFields" } & Pick<
                MarkdownRemarkFields,
                "slug" | "tags"
              >
            >;
            frontmatter?: Maybe<
              { __typename?: "MarkdownRemarkFrontmatter" } & Pick<
                MarkdownRemarkFrontmatter,
                "title" | "date" | "description"
              >
            >;
          };
      }
    >;
  };
};

export type BlogsQueryVariables = Exact<{ [key: string]: never }>;

export type BlogsQuery = { __typename?: "Query" } & {
  allMarkdownRemark: { __typename?: "MarkdownRemarkConnection" } & {
    edges: Array<
      { __typename?: "MarkdownRemarkEdge" } & {
        node: { __typename?: "MarkdownRemark" } & {
          fields?: Maybe<
            { __typename?: "MarkdownRemarkFields" } & Pick<
              MarkdownRemarkFields,
              "slug"
            >
          >;
          frontmatter?: Maybe<
            { __typename?: "MarkdownRemarkFrontmatter" } & Pick<
              MarkdownRemarkFrontmatter,
              "title"
            >
          >;
        };
      }
    >;
  };
};

export type YearsQueryVariables = Exact<{ [key: string]: never }>;

export type YearsQuery = { __typename?: "Query" } & {
  years: { __typename?: "MarkdownRemarkConnection" } & {
    group: Array<
      { __typename?: "MarkdownRemarkGroupConnection" } & {
        count: MarkdownRemarkGroupConnection["totalCount"];
        year: MarkdownRemarkGroupConnection["fieldValue"];
      }
    >;
  };
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "base64" | "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_tracedSVGFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "tracedSVG" | "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_withWebpFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_noBase64Fragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_withWebp_noBase64Fragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: "ImageSharpFluid";
} & {
  maxHeight: ImageSharpFluid["presentationHeight"];
  maxWidth: ImageSharpFluid["presentationWidth"];
};

export type GatsbyImageSharpFluid_tracedSVGFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_withWebpFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_noBase64Fragment = {
  __typename?: "ImageSharpFluid";
} & Pick<ImageSharpFluid, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyImageSharpFluid_withWebp_noBase64Fragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_tracedSVGFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_withWebpFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_noBase64Fragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<ImageSharpResolutions, "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpSizesFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_tracedSVGFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_withWebpFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_noBase64Fragment = {
  __typename?: "ImageSharpSizes";
} & Pick<ImageSharpSizes, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyImageSharpSizes_withWebp_noBase64Fragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type BioQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BioQueryQuery = { __typename?: "Query" } & {
  avatar?: Maybe<
    { __typename?: "File" } & {
      childImageSharp?: Maybe<
        { __typename?: "ImageSharp" } & {
          fixed?: Maybe<
            { __typename?: "ImageSharpFixed" } & GatsbyImageSharpFixedFragment
          >;
        }
      >;
    }
  >;
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          SiteSiteMetadata,
          "author"
        > & {
            social?: Maybe<
              { __typename?: "SiteSiteMetadataSocial" } & Pick<
                SiteSiteMetadataSocial,
                "github"
              >
            >;
          }
      >;
    }
  >;
};

export type BlogPostFragment = { __typename?: "MarkdownRemark" } & Pick<
  MarkdownRemark,
  "id" | "excerpt" | "html"
> & {
    fields?: Maybe<
      { __typename?: "MarkdownRemarkFields" } & Pick<
        MarkdownRemarkFields,
        "tags"
      >
    >;
    frontmatter?: Maybe<
      { __typename?: "MarkdownRemarkFrontmatter" } & Pick<
        MarkdownRemarkFrontmatter,
        "title" | "date" | "color" | "description"
      >
    >;
  };

export type BlogSidebarQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BlogSidebarQueryQuery = { __typename?: "Query" } & {
  recentPosts: { __typename?: "MarkdownRemarkConnection" } & {
    edges: Array<
      { __typename?: "MarkdownRemarkEdge" } & {
        node: { __typename?: "MarkdownRemark" } & Pick<
          MarkdownRemark,
          "excerpt"
        > & {
            fields?: Maybe<
              { __typename?: "MarkdownRemarkFields" } & Pick<
                MarkdownRemarkFields,
                "slug"
              >
            >;
            frontmatter?: Maybe<
              { __typename?: "MarkdownRemarkFrontmatter" } & Pick<
                MarkdownRemarkFrontmatter,
                "date" | "title"
              >
            >;
          };
      }
    >;
  };
  tags: { __typename?: "MarkdownRemarkConnection" } & {
    group: Array<
      { __typename?: "MarkdownRemarkGroupConnection" } & {
        count: MarkdownRemarkGroupConnection["totalCount"];
        tag: MarkdownRemarkGroupConnection["fieldValue"];
      }
    >;
  };
  years: { __typename?: "MarkdownRemarkConnection" } & {
    group: Array<
      { __typename?: "MarkdownRemarkGroupConnection" } & {
        count: MarkdownRemarkGroupConnection["totalCount"];
        year: MarkdownRemarkGroupConnection["fieldValue"];
      }
    >;
  };
};

export type PostCardFragment = { __typename?: "MarkdownRemark" } & {
  fields?: Maybe<
    { __typename?: "MarkdownRemarkFields" } & Pick<
      MarkdownRemarkFields,
      "slug" | "tags"
    >
  >;
  frontmatter?: Maybe<
    { __typename?: "MarkdownRemarkFrontmatter" } & Pick<
      MarkdownRemarkFrontmatter,
      "date" | "title" | "color"
    >
  >;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          SiteSiteMetadata,
          "title" | "description" | "author"
        >
      >;
    }
  >;
};

export type BlogIndexQueryVariables = Exact<{ [key: string]: never }>;

export type BlogIndexQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">
      >;
    }
  >;
  allMarkdownRemark: { __typename?: "MarkdownRemarkConnection" } & {
    edges: Array<
      { __typename?: "MarkdownRemarkEdge" } & {
        node: { __typename?: "MarkdownRemark" } & PostCardFragment;
      }
    >;
  };
};

export type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type BlogPostBySlugQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          SiteSiteMetadata,
          "title" | "author"
        >
      >;
    }
  >;
  markdownRemark?: Maybe<{ __typename?: "MarkdownRemark" } & BlogPostFragment>;
};

export type TagPageQueryVariables = Exact<{
  tag?: Maybe<Scalars["String"]>;
}>;

export type TagPageQuery = { __typename?: "Query" } & {
  allMarkdownRemark: { __typename?: "MarkdownRemarkConnection" } & Pick<
    MarkdownRemarkConnection,
    "totalCount"
  > & {
      edges: Array<
        { __typename?: "MarkdownRemarkEdge" } & {
          node: { __typename?: "MarkdownRemark" } & PostCardFragment;
        }
      >;
    };
};

export type YearPageQueryVariables = Exact<{
  year?: Maybe<Scalars["Int"]>;
}>;

export type YearPageQuery = { __typename?: "Query" } & {
  allMarkdownRemark: { __typename?: "MarkdownRemarkConnection" } & Pick<
    MarkdownRemarkConnection,
    "totalCount"
  > & {
      edges: Array<
        { __typename?: "MarkdownRemarkEdge" } & {
          node: { __typename?: "MarkdownRemark" } & PostCardFragment;
        }
      >;
    };
};

export const GatsbyImageSharpFixedFragmentDoc = gql`
  fragment GatsbyImageSharpFixed on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpFixed_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpFixed_withWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpFixed_withWebp_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpFixed_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpFixed_withWebp_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpFluidFragmentDoc = gql`
  fragment GatsbyImageSharpFluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpFluidLimitPresentationSizeFragmentDoc = gql`
  fragment GatsbyImageSharpFluidLimitPresentationSize on ImageSharpFluid {
    maxHeight: presentationHeight
    maxWidth: presentationWidth
  }
`;
export const GatsbyImageSharpFluid_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpFluid_withWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpFluid_withWebp_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpFluid_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpFluid_withWebp_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpResolutionsFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions on ImageSharpResolutions {
    base64
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpResolutions_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_tracedSVG on ImageSharpResolutions {
    tracedSVG
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpResolutions_withWebpFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp on ImageSharpResolutions {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpResolutions_withWebp_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp_tracedSVG on ImageSharpResolutions {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpResolutions_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_noBase64 on ImageSharpResolutions {
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpResolutions_withWebp_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp_noBase64 on ImageSharpResolutions {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpSizesFragmentDoc = gql`
  fragment GatsbyImageSharpSizes on ImageSharpSizes {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpSizes_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_tracedSVG on ImageSharpSizes {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpSizes_withWebpFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp on ImageSharpSizes {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpSizes_withWebp_tracedSVGFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp_tracedSVG on ImageSharpSizes {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpSizes_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpSizes_noBase64 on ImageSharpSizes {
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpSizes_withWebp_noBase64FragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp_noBase64 on ImageSharpSizes {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const BlogPostFragmentDoc = gql`
  fragment BlogPost on MarkdownRemark {
    id
    excerpt(pruneLength: 160)
    html
    fields {
      tags
    }
    frontmatter {
      title
      date(formatString: "M.D.YY")
      color
      description
    }
  }
`;
export const PostCardFragmentDoc = gql`
  fragment PostCard on MarkdownRemark {
    fields {
      slug
      tags
    }
    frontmatter {
      date(formatString: "M.D.YY")
      title
      color
    }
  }
`;
export const FeedDocument = gql`
  query Feed {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
            tags
          }
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedQuery(
  baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>
) {
  return Apollo.useQuery<FeedQuery, FeedQueryVariables>(
    FeedDocument,
    baseOptions
  );
}
export function useFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>
) {
  return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(
    FeedDocument,
    baseOptions
  );
}
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const BlogsDocument = gql`
  query Blogs {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

/**
 * __useBlogsQuery__
 *
 * To run a query within a React component, call `useBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogsQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogsQuery, BlogsQueryVariables>
) {
  return Apollo.useQuery<BlogsQuery, BlogsQueryVariables>(
    BlogsDocument,
    baseOptions
  );
}
export function useBlogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlogsQuery, BlogsQueryVariables>
) {
  return Apollo.useLazyQuery<BlogsQuery, BlogsQueryVariables>(
    BlogsDocument,
    baseOptions
  );
}
export type BlogsQueryHookResult = ReturnType<typeof useBlogsQuery>;
export type BlogsLazyQueryHookResult = ReturnType<typeof useBlogsLazyQuery>;
export type BlogsQueryResult = Apollo.QueryResult<
  BlogsQuery,
  BlogsQueryVariables
>;
export const YearsDocument = gql`
  query Years {
    years: allMarkdownRemark {
      group(field: fields___year) {
        count: totalCount
        year: fieldValue
      }
    }
  }
`;

/**
 * __useYearsQuery__
 *
 * To run a query within a React component, call `useYearsQuery` and pass it any options that fit your needs.
 * When your component renders, `useYearsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYearsQuery({
 *   variables: {
 *   },
 * });
 */
export function useYearsQuery(
  baseOptions?: Apollo.QueryHookOptions<YearsQuery, YearsQueryVariables>
) {
  return Apollo.useQuery<YearsQuery, YearsQueryVariables>(
    YearsDocument,
    baseOptions
  );
}
export function useYearsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<YearsQuery, YearsQueryVariables>
) {
  return Apollo.useLazyQuery<YearsQuery, YearsQueryVariables>(
    YearsDocument,
    baseOptions
  );
}
export type YearsQueryHookResult = ReturnType<typeof useYearsQuery>;
export type YearsLazyQueryHookResult = ReturnType<typeof useYearsLazyQuery>;
export type YearsQueryResult = Apollo.QueryResult<
  YearsQuery,
  YearsQueryVariables
>;
export const BioQueryDocument = gql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
  ${GatsbyImageSharpFixedFragmentDoc}
`;

/**
 * __useBioQueryQuery__
 *
 * To run a query within a React component, call `useBioQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useBioQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBioQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useBioQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<BioQueryQuery, BioQueryQueryVariables>
) {
  return Apollo.useQuery<BioQueryQuery, BioQueryQueryVariables>(
    BioQueryDocument,
    baseOptions
  );
}
export function useBioQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BioQueryQuery,
    BioQueryQueryVariables
  >
) {
  return Apollo.useLazyQuery<BioQueryQuery, BioQueryQueryVariables>(
    BioQueryDocument,
    baseOptions
  );
}
export type BioQueryQueryHookResult = ReturnType<typeof useBioQueryQuery>;
export type BioQueryLazyQueryHookResult = ReturnType<
  typeof useBioQueryLazyQuery
>;
export type BioQueryQueryResult = Apollo.QueryResult<
  BioQueryQuery,
  BioQueryQueryVariables
>;
export const BlogSidebarQueryDocument = gql`
  query BlogSidebarQuery {
    recentPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
    tags: allMarkdownRemark {
      group(field: fields___tags) {
        count: totalCount
        tag: fieldValue
      }
    }
    years: allMarkdownRemark {
      group(field: fields___year) {
        count: totalCount
        year: fieldValue
      }
    }
  }
`;

/**
 * __useBlogSidebarQueryQuery__
 *
 * To run a query within a React component, call `useBlogSidebarQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogSidebarQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogSidebarQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogSidebarQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlogSidebarQueryQuery,
    BlogSidebarQueryQueryVariables
  >
) {
  return Apollo.useQuery<BlogSidebarQueryQuery, BlogSidebarQueryQueryVariables>(
    BlogSidebarQueryDocument,
    baseOptions
  );
}
export function useBlogSidebarQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogSidebarQueryQuery,
    BlogSidebarQueryQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    BlogSidebarQueryQuery,
    BlogSidebarQueryQueryVariables
  >(BlogSidebarQueryDocument, baseOptions);
}
export type BlogSidebarQueryQueryHookResult = ReturnType<
  typeof useBlogSidebarQueryQuery
>;
export type BlogSidebarQueryLazyQueryHookResult = ReturnType<
  typeof useBlogSidebarQueryLazyQuery
>;
export type BlogSidebarQueryQueryResult = Apollo.QueryResult<
  BlogSidebarQueryQuery,
  BlogSidebarQueryQueryVariables
>;
export const BlogIndexDocument = gql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
  ${PostCardFragmentDoc}
`;

/**
 * __useBlogIndexQuery__
 *
 * To run a query within a React component, call `useBlogIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogIndexQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogIndexQuery, BlogIndexQueryVariables>
) {
  return Apollo.useQuery<BlogIndexQuery, BlogIndexQueryVariables>(
    BlogIndexDocument,
    baseOptions
  );
}
export function useBlogIndexLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogIndexQuery,
    BlogIndexQueryVariables
  >
) {
  return Apollo.useLazyQuery<BlogIndexQuery, BlogIndexQueryVariables>(
    BlogIndexDocument,
    baseOptions
  );
}
export type BlogIndexQueryHookResult = ReturnType<typeof useBlogIndexQuery>;
export type BlogIndexLazyQueryHookResult = ReturnType<
  typeof useBlogIndexLazyQuery
>;
export type BlogIndexQueryResult = Apollo.QueryResult<
  BlogIndexQuery,
  BlogIndexQueryVariables
>;
export const BlogPostBySlugDocument = gql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...BlogPost
    }
  }
  ${BlogPostFragmentDoc}
`;

/**
 * __useBlogPostBySlugQuery__
 *
 * To run a query within a React component, call `useBlogPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogPostBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlogPostBySlugQuery,
    BlogPostBySlugQueryVariables
  >
) {
  return Apollo.useQuery<BlogPostBySlugQuery, BlogPostBySlugQueryVariables>(
    BlogPostBySlugDocument,
    baseOptions
  );
}
export function useBlogPostBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostBySlugQuery,
    BlogPostBySlugQueryVariables
  >
) {
  return Apollo.useLazyQuery<BlogPostBySlugQuery, BlogPostBySlugQueryVariables>(
    BlogPostBySlugDocument,
    baseOptions
  );
}
export type BlogPostBySlugQueryHookResult = ReturnType<
  typeof useBlogPostBySlugQuery
>;
export type BlogPostBySlugLazyQueryHookResult = ReturnType<
  typeof useBlogPostBySlugLazyQuery
>;
export type BlogPostBySlugQueryResult = Apollo.QueryResult<
  BlogPostBySlugQuery,
  BlogPostBySlugQueryVariables
>;
export const TagPageDocument = gql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
  ${PostCardFragmentDoc}
`;

/**
 * __useTagPageQuery__
 *
 * To run a query within a React component, call `useTagPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagPageQuery({
 *   variables: {
 *      tag: // value for 'tag'
 *   },
 * });
 */
export function useTagPageQuery(
  baseOptions?: Apollo.QueryHookOptions<TagPageQuery, TagPageQueryVariables>
) {
  return Apollo.useQuery<TagPageQuery, TagPageQueryVariables>(
    TagPageDocument,
    baseOptions
  );
}
export function useTagPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TagPageQuery, TagPageQueryVariables>
) {
  return Apollo.useLazyQuery<TagPageQuery, TagPageQueryVariables>(
    TagPageDocument,
    baseOptions
  );
}
export type TagPageQueryHookResult = ReturnType<typeof useTagPageQuery>;
export type TagPageLazyQueryHookResult = ReturnType<typeof useTagPageLazyQuery>;
export type TagPageQueryResult = Apollo.QueryResult<
  TagPageQuery,
  TagPageQueryVariables
>;
export const YearPageDocument = gql`
  query YearPage($year: Int) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { year: { eq: $year } } }
    ) {
      totalCount
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
  ${PostCardFragmentDoc}
`;

/**
 * __useYearPageQuery__
 *
 * To run a query within a React component, call `useYearPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useYearPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYearPageQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useYearPageQuery(
  baseOptions?: Apollo.QueryHookOptions<YearPageQuery, YearPageQueryVariables>
) {
  return Apollo.useQuery<YearPageQuery, YearPageQueryVariables>(
    YearPageDocument,
    baseOptions
  );
}
export function useYearPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    YearPageQuery,
    YearPageQueryVariables
  >
) {
  return Apollo.useLazyQuery<YearPageQuery, YearPageQueryVariables>(
    YearPageDocument,
    baseOptions
  );
}
export type YearPageQueryHookResult = ReturnType<typeof useYearPageQuery>;
export type YearPageLazyQueryHookResult = ReturnType<
  typeof useYearPageLazyQuery
>;
export type YearPageQueryResult = Apollo.QueryResult<
  YearPageQuery,
  YearPageQueryVariables
>;
