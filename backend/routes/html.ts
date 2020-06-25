/**
 * @author: lencx
 * @create_at: Jun 25, 2020
 */

export default function handleHtml(context: any) {
  const body = Deno.readFileSync('frontend/index.html');
  const decodeBody = new TextDecoder('utf-8').decode(body);
  context.response.body = decodeBody;
}