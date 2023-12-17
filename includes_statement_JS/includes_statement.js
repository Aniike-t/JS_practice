class SegmentHandler {
    constructor(segments) {
        this.segments = segments;
    }

    getSegmentsWithPoint(point) {
        const segs = [];

        for (const seg of this.segments) {
            // Check if the point is present in the current sub-array (seg)
            if (seg.includes(point)) {
                segs.push(seg);
            }
        }

        return segs;
    }
}

// Example usage
const segmentHandler = new SegmentHandler([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

const pointToFind = 5;
const segmentsWithPoint = segmentHandler.getSegmentsWithPoint(pointToFind);

console.log(`Segments containing ${pointToFind}:`, segmentsWithPoint);