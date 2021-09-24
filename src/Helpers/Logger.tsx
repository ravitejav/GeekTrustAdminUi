/** 
 * @param {string} message - message to log
*/
export const logger = (message: string | JSON | any) => {
    console.log((new Date().toISOString()) + " --- " + message);
}