export function urlSafeBase64Encode(data:string|Buffer): string{
    var buff:Buffer;
    if(Buffer.isBuffer(data)){
        buff = data;
    }else{
        buff = new Buffer(data);
    }
    return buff.toString('base64')
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='
}

export function urlSafeBase64Decode(base64:string): string{
    // Add removed at end '='
    if(!base64.endsWith("=")){
        base64 += Array(5 - base64.length % 4).join('=');
    }

    base64 = base64.replace(/\-/g, '+') // Convert '-' to '+'
    .replace(/\_/g, '/'); // Convert '_' to '/'

  return new Buffer(base64, 'base64').toString();
}