export const Node = (position, route) => {
    if ((position[0] < 0 || position[0] > 7) || (position[1] < 0 || position[1] > 7)) {
        return null 
    }
    return {position, route};
}
