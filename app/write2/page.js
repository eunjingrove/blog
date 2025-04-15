'use client'

import { handleSubmit } from "./actions"

export default async function Write2() {

    return (
        <div>
            <form action={handleSubmit}>
                <input name="title"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}