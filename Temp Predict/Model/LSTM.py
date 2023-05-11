import torch
import torch.nn as nn



device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

class LSTM(nn.Module):
    def __init__(self, input_dim, hidden_dim, num_layers, output_dim):
        super(LSTM, self).__init__()
        self.hidden_dim = hidden_dim
        self.num_layers = num_layers
        self.lstm_1 = nn.LSTM(input_dim, hidden_dim, num_layers, batch_first=True)
        self.lstm_2 = nn.LSTM(hidden_dim, hidden_dim, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_dim, output_dim)
    
    def forward(self, x):
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_dim).requires_grad_().to(device)
        c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_dim).requires_grad_().to(device)
        out, (hn, cn) = self.lstm_1(x, (h0.detach(), c0.detach()))
        h1 = torch.zeros(self.num_layers, out.size(0), self.hidden_dim).requires_grad_().to(device)
        c1 = torch.zeros(self.num_layers, out.size(0), self.hidden_dim).requires_grad_().to(device)
        out, (hn, cn) = self.lstm_2(out, (h1.detach(), c1.detach()))
        out = self.fc(out[:, -1, :]) 
        return out