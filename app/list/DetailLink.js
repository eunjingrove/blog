'use client'

import {useRouter} from 'next/navigation'

export default function DetailLink() {
    let router = useRouter()
    return (
        <button onClick={() => { router.prefetch('/detail/dsd') }}>버튼</button>
    )
}