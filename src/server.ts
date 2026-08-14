import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3050;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const projects = [
  { id: 'ebpf', name: 'eBPF Kernel Zero-Copy Mesh', port: 3010, icon: '🐧', domain: 'Kernel & Systems', repo: 'ebpf-kernel-zero-copy-mesh' },
  { id: 'simd', name: 'Vector Tensor WASM Engine', port: 3009, icon: '⚡', domain: 'High-Perf SIMD', repo: 'vector-tensor-wasm-engine' },
  { id: 'ast', name: 'AST Architecture Analyzer', port: 3001, icon: '📐', domain: 'Software Analytics', repo: 'arch-analyzer-ast-engine' },
  { id: 'mcp', name: 'MCP Autonomous Agent Fabric', port: 3008, icon: '🤖', domain: 'Agent Mesh', repo: 'mcp-autonomous-agent-fabric' },
  { id: 'temporal', name: 'Self-Corrective Temporal GraphRAG', port: 3007, icon: '🧠', domain: 'Temporal RAG', repo: 'self-corrective-temporal-graph-rag' },
  { id: 'causal', name: 'Hyper-Causal Self-Healing Agent', port: 3004, icon: '🛸', domain: 'Causal AI & Self-Healing', repo: 'hyper-causal-self-healing-agent' },
  { id: 'symbolic', name: 'Neuro-Symbolic GraphRAG', port: 3003, icon: '🕸️', domain: 'Symbolic Deduction', repo: 'neuro-symbolic-graph-rag' },
  { id: 'zkml', name: 'zkML Zero-Knowledge Proofs', port: 3011, icon: '🔐', domain: 'Zero-Knowledge ML', repo: 'zkml-zero-knowledge-neural-proofs' },
  { id: 'pqc', name: 'Post-Quantum Lattice Crypto', port: 3005, icon: '🛡️', domain: 'Post-Quantum Cryptography', repo: 'post-quantum-lattice-crypto-engine' },
  { id: 'quantum', name: 'Quantum Variational Classifier', port: 3012, icon: '⚛️', domain: 'Quantum Computing', repo: 'quantum-variational-classifier' },
  { id: 'network', name: 'Autonomous Complex Networks', port: 3006, icon: '🌐', domain: 'Network Science', repo: 'autonomous-complex-network-simulator' },
  { id: 'raft', name: 'Raft Consensus Formal Verification', port: 3002, icon: '🔬', domain: 'Distributed Systems', repo: 'raft-consensus-formal-verification' },
];

app.get('/api/projects', (req, res) => {
  res.json({ projects });
});

app.listen(PORT, () => {
  console.log(`👑 anderdebona Frontier Ecosystem Command Center running on http://localhost:${PORT}`);
});
