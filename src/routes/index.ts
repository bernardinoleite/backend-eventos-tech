import { Router } from "express";
import { subscribeRouter } from "./subscribe.routes";
const router = Router();

router.get("/", (request, response) => {
    response.json({
        message: "Hello World",
        status: "success",
        version: "1.0.0",
        data: null,
        statusCode: 200,
        yourIP: request.ip,
        yourURL: request.url,
        yourParams: request.params,
        yourQuery: request.query,
        yourHeaders: request.headers,
        yourBody: request.body,
        yourVersion: request.httpVersion,
        yourVersionMajor: request.httpVersionMajor,
        yourVersionMinor: request.httpVersionMinor,
        yourComplete: request.complete,
        yourCookies: request.cookies,
        yourFresh: request.fresh,
        yourHostname: request.hostname,
        yourOriginalUrl: request.originalUrl,
        yourPath: request.path,
        yourProtocol: request.protocol,
        yourSecure: request.secure,
        yourStale: request.stale,
        yourSubdomains: request.subdomains,
        yourXhr: request.xhr,
        yourBaseUrl: request.baseUrl,
        yourMethod: request.method,

    })
})

router.use("/subscribe", subscribeRouter);

export {
    router
}