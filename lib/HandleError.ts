import { NOT_FOUND } from "./Constants";

export default function ErrorHandler(error: Error) {
  switch (error.message) {
    case NOT_FOUND:
      return { status: 404, Error: NOT_FOUND };
    default:
      return { status: 400, Error: "An error happened:" };
  }
}
