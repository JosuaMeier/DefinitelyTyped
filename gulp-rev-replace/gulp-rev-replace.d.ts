// Type definitions for gulp-rev-replace v0.2.1
// Project: https://github.com/jamesknelson/gulp-rev-replace
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-rev-replace' {
  namespace revReplace {
    interface Options {
      canonicalUris?: boolean;
      replaceInExtensions?: Array<string>;
      prefix?: string;
      manifest?: NodeJS.ReadWriteStream;
      modifyUnreved?: Function;
      modifyReved?: Function;
    }
  }

  function revReplace(options?: revReplace.Options): NodeJS.ReadWriteStream;

  export = revReplace;
}
