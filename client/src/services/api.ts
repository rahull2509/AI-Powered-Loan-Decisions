import axios from 'axios';

/** Axios instance with base URL pointing to our Express backend */
const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

/** Shape of the loan analysis request body */
export interface LoanInput {
  income: number;
  creditScore: number;
  existingEMI: number;
  loanAmount: number;
  tenure: number;
  employment: 'stable' | 'unstable';
}

/** Shape of the analysis response */
export interface LoanResult {
  eligible: boolean;
  score: number;
  probability: number;
  risk: 'Low' | 'Medium' | 'High';
  emi: number;
  interestRate: number;
  recommendedLoan: number;
  totalPayable: number;
  reasons: string[];
  suggestions: string[];
  ai?: {
    summary: string;
    explanation: string;
    riskAnalysis: string;
    suggestions: string[];
  };
  applicationId?: string;
}

/**
 * POST /api/analyze-loan
 * Send applicant data and receive the full analysis.
 */
export const analyzeLoan = async (data: LoanInput): Promise<LoanResult> => {
  const response = await api.post<LoanResult>('/analyze-loan', data);
  return response.data;
};

/**
 * PATCH /api/loan-status/:id
 * Update the status of an existing application.
 */
export const updateLoanStatus = async (
  id: string,
  status: string
): Promise<{ status: string }> => {
  const response = await api.patch(`/loan-status/${id}`, { status });
  return response.data;
};

export default api;
