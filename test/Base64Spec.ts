/// <reference path="../node_modules/@types/chai/index.d.ts" />
/// <reference path="../node_modules/@types/chai-as-promised/index.d.ts" />

import { assert, expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);

import * as Base64 from '../src/Base64';

describe('Base64', () => {
    describe('计算Base64', () => {
        it('empty', () => {
            expect(Base64.urlSafeBase64Encode('')).to.equal('');
        });

        it('123456', () => {
            expect(Base64.urlSafeBase64Encode('123456')).to.equal('MTIzNDU2');
        });
    });
});