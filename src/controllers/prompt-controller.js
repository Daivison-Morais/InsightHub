const { default: OpenAI } = require("openai");

module.exports = {
    async sendText (req, res){

        try {
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY,
            });

            const response = await openai.completions.create(
                {
                    model: "text-davinci-003",
                    prompt: req.body.prompt, 
                    temperature: 0,
                    max_tokens: 4000,
                    top_p: 1,
                    frequency_penalty: 0.60,
                    presence_penalty: 0.60,
                  }
            )

            return res.status(200).json({
                sucess: true,
                data: response.choices[0].text
            })
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : "there was an inssue on the server"
            })
        }

    }
}