import { useState } from 'react';

export default function useRenderingSetting () {
    const [page, setPage] = useState("userinfo");

    return {"page": page, "setPage": setPage};
}
