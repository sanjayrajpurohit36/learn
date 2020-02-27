export function image_path(relativePath) {
    const basePath = "./assets"
    if (process.env.NODE_ENV === 'development') {
		return require(`assets/images${relativePath}`);
	}
    return `${basePath}/images/${relativePath}`;
    // return `${process.env.REACT_APP_CDN_BASEPATH}/images${relativePath}`;
}
