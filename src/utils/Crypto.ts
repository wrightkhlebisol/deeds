import { SHA256 } from 'crypto-js';

export async function generateHash(data: string): Promise<string> {
  return SHA256(data).toString();
}

export async function generateProvenance(data: unknown): Promise<string> {
  const provenanceData = {
    timestamp: new Date().toISOString(),
    data: data,
    // Add more provenance metadata as needed
  };

  return SHA256(JSON.stringify(provenanceData)).toString();
} 