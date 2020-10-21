export async function run(...cmd: string[]) {
    const p = Deno.run({
        cmd,
        stdout: 'piped',
        stderr: 'piped'
    })

    const output = await p.output()
    p.close()
    return new TextDecoder().decode(output)
}
