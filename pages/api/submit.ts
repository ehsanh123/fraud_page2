// /pages/api/submit.ts

import { execFile } from 'child_process';
// import { Request, Response } from 'express'; 
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { USER_ID, AMOUNT_GBP, avg_transaction_amount, transaction_amount_std, ...rest } = req.body;
    const formData = { USER_ID, AMOUNT_GBP, avg_transaction_amount, transaction_amount_std, ...rest };
    
    //
    const scriptPath: string = './script.py';  // Replace with actual script path
    
    // const pythonPath = 'C:/Users/Ehsan/fraud_web_1.1/venv/Scripts/python.exe';  // Linux/macOS
    const pythonPath = "python";
    const jsonData = JSON.stringify(formData);
    // console.log("Python script executed");

    execFile(pythonPath, [scriptPath , jsonData ], (error: Error | null, stdout: string, stderr: string): void => {
        // console.log("Python script executed");
  
      if (error) {
        console.error("Error executing script:", error.message);
        return res.status(200).json({ error: "Failed to execute script", details: error.message });
      }
  
      if (stderr) {
        console.error("Python stderr:", stderr);
        return res.status(200).json({ error: "Script error", details: stderr });
      }
  
      console.log("Python stdout:", stdout);
      return res.status(200).json({ output: stdout });  // Respond with the output of the script
    });

    // Process the form data as needed (e.g., fraud detection)
    //

    // return res.status(200).json({
    //   message: 'Data received successfully!',
    //   data: { USER_ID, AMOUNT_GBP, avg_transaction_amount, transaction_amount_std, ...rest },
    // });
  } 
  
  else {
    // Return an error if method is not POST
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}