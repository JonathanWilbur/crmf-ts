/* eslint-disable */
import { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    CertReq,
    _decode_CertReq,
    _encode_CertReq,
} from "../PKIXCRMF-2009/CertReq.ta";
import { id_regInfo_certReq } from "../PKIXCRMF-2009/id-regInfo-certReq.va";

/* START_OF_SYMBOL_DEFINITION regInfo_certReq */
/**
 * @summary regInfo_certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regInfo-certReq ATTRIBUTE ::= { TYPE CertReq IDENTIFIED BY id-regInfo-certReq }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CertReq>}
 * @implements {ATTRIBUTE<CertReq>}
 */
export const regInfo_certReq: ATTRIBUTE<CertReq> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertReq,
    },
    encoderFor: {
        "&Type": _encode_CertReq,
    },
    "&id": id_regInfo_certReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION regInfo_certReq */

/* eslint-enable */
